// import Joi from 'joi';
// import { registerValidate } from '../validators';
import bcrypt from "bcrypt";
import { User } from "../../models";
import {
  getAuthUser,
  issueTokens,
  getRefreshTokenUser,
} from "../../functions/auth";

export default {
  Query: {
    users: async (root, args, { req }) => {
      const isAuthenticate = await getAuthUser(req);
      if (isAuthenticate){
        return await User.find();
      } else {
        throw new Error("Usuario no autenticado.");
      }
    },
    profile: async (root, args, { req }, info) => {
      const isAuthenticate = await getAuthUser(req);
      if (isAuthenticate){
        let authUser = await User.findById(args.id);
        return authUser;
      } else {
        throw new Error("Usuario no autenticado.");
      }
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
    refreshToken: async (root, args, { req }, info) => {
      let authUser = getAuthUser(req, true);
      if (authUser) {
        let tokens = await issueTokens(authUser);
        return {
          user,
          ...tokens,
        };
      } else {
        throw new Error("Usuario no autenticado.");
      }
    },
    search: async (root, args, { req }, info) => {
      const isAuthenticate = await getAuthUser(req);
      if (isAuthenticate){
        const response = await User.find({
          name: {
            $regex: new RegExp(args.query),
          },
        });
        return response;
      } else {
        throw new Error("Usuario no autenticado.");
      }
    },
    getUserByRol: async (_, args, { req }, __) => {
      const response = await User.find({ rol: args.rol });
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
      const isAuthenticate = await getAuthUser(req);
      if (isAuthenticate){ 
        // verificar que el user no exista en la DB
        const userUpdated = await User.findByIdAndUpdate(args.id, {$set: 
          {name: args.name,
          lastname: args.lastname,
          email: args.email}
        }, {new: true});
      } else {
        throw new Error("Usuario no autenticado.");
      } 
      if (!userUpdated) {
        throw new Error("Error al actualizar el usuario.");
      }
      return userUpdated;
    },

    changeRol: async (_, args, { req }, info) => {
      const newUserRol = await User.findByIdAndUpdate(
        args.id,
        {
          rol: args.rol,
        },
        {
          new: true,
          useFindAndModify: false,
        }
      );
      if (!newUserRol) {
        throw new Error("Error el usuario no existe");
      }
      return newUserRol;
    },
  },
};
