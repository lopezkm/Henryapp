// import Joi from 'joi';
// import { registerValidate } from '../validators';
import bcrypt from "bcrypt";
import { User } from "../../models";
import { getAuthUser, issueTokens } from "../../functions/auth";

export default {
  Query: {
    users: async () => {
      return await User.find();
    },
    profile: async (root, args, { req }, info) => {
      console.log(req.headers);
      let authUser = await User.findById(args.id);
      return authUser;
    },
    login: async (root, args, { req }, info) => {
      const user = await User.findOne({
        email: args.email,
      });
      if (!user) {
        throw new Error("Error el usuario no se encuentra registrado.");
      }
      let isMatch = await bcrypt.compare(args.password, user.password);
      if (!isMatch) {
        throw new Error("la contraseña es incorrecta");
      }
      let tokens = await issueTokens(user);
      return {
        user,
        ...tokens,
      };
    },
    refreshToken: () => {},
    search: async (root, args, { req }, info) => {
      const response = await User.find({
        name: {
          $regex: new RegExp(args.query),
        },
      });
      return response;
    },
  },
  Mutation: {
    // Crear nuevo usuario
    register: async (root, args, { req }, info) => {
      // verificar que el user no exista en la DB
      const user = await User.findOne({
        email: args.email,
      });

      if (user) {
        throw new Error("El email ya se encuentra registrado.");
      }

      // El registro es valido
      args.password = await bcrypt.hash(args.password, 10);
      const newUser = await User.create(args);
      let tokens = await issueTokens(newUser);
      return {
        user: newUser,
        ...tokens,
      };
    },

    updateUser: async (root, args, { req }, info) => {
      // verificar que el user no exista en la DB
      const userUpdated = await User.findByIdAndUpdate(args.id, {
        // ...args.user
        // TODO: terminar funcion
      });

      if (!user) {
        throw new Error("Error al actualizar el usuario.");
      }

      return userUpdated;
    },
  },
};
