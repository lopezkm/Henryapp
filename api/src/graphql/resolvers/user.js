// import Joi from 'joi';
// import { registerValidate } from '../validators';
import bcrypt from "bcrypt";
import { User } from "../../models";
import { issueTokens } from "../../functions/auth";

export default {
  Query: {
    users: async () => {
      return await User.find({});
    },
    profile: async (_, args) => {
      return await User.findById(args.id);
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
        user: user,
        ...tokens,
      };
    },
    refreshToken: () => {},
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
