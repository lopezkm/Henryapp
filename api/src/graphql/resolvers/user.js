// import Joi from 'joi';
// import { registerValidate } from '../validators';
import bcrypt from "bcrypt";
import { User } from "../../models";
import {
  getAuthUser,
  issueTokens,
  getRefreshTokenUser,
} from "../../functions/auth";
import { myRolIs } from "../../functions/myRolIs";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();
const { APP_SECRET } = process.env;

export default {
  Query: {
    users: async (root, args, { req }, _) => {
      const isAuthenticate = await getAuthUser(req);
      const isPM = await myRolIs(req);
      if (isAuthenticate) {
        if (isPM.first) {
          return await User.find()
            .populate("cohort")
            .populate("group")
            .populate("feedbacks");
        } else {
          throw new Error("Usuario no es PM, ni Administrador.");
        }
      } else {
        throw new Error("Usuario no autenticado.");
      }
    },
    login: async (root, args, { req }, info) => {
      if (!req.headers.authorization) {
        const user = await User.findOne({
          email: args.email,
        });
        if (!user) {
          throw new Error("No estas registrado en Henry APP");
        }
        let isMatch = await bcrypt.compare(args.password, user.password);
        if (!isMatch) {
          throw new Error("La contraseña es incorrecta");
        }
        let tokens = await issueTokens(user);
        return {
          user,
          ...tokens,
        };
      }
      const isAuthenticate = await getAuthUser(req);
      if (!isAuthenticate) {
        const user = await User.findOne({
          email: args.email,
        });
        if (!user) {
          throw new Error("No estas registrado en Henry APP");
        }
        let isMatch = await bcrypt.compare(args.password, user.password);
        if (!isMatch) {
          throw new Error("La contraseña es incorrecta");
        }
        let tokens = await issueTokens(user);
        return {
          user,
          ...tokens,
        };
      } else {
        throw new Error("Ya estas logueado con una sesión iniciada");
      }
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
      if (isAuthenticate) {
        const response = await User.find({
          $or: [
            {
              email: {
                $regex: new RegExp(args.query),
              },
            },
            {
              name: {
                $regex: new RegExp(args.query),
              },
            },
            {
              lastname: {
                $regex: new RegExp(args.query),
              },
            },
          ],
        })
          .populate("cohort")
          .populate("group")
          .populate("feedbacks");
        return response;
      } else {
        throw new Error("Usuario no autenticado.");
      }
    },
    getUserByRol: async (_, args, { req }, __) => {
      const response = await User.find({ rol: args.rol });
      return response;
    },
    me: async (_, args, { req }, __) => {
      const isAuthenticate = await getAuthUser(req);
      if (isAuthenticate) {
        let header = req.headers.authorization;
        header = header.slice(7);
        const token = jwt.verify(header, APP_SECRET);
        let authUser = await User.findById(token._id);
        return authUser;
      } else {
        throw new Error("no estás loggeado!");
      }
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
      if (isAuthenticate) {
        // verificar que el user no exista en la DB
        let header = req.headers.authorization;
        header = header.slice(7);
        const token = jwt.verify(header, APP_SECRET);
        const userUpdated = await User.findByIdAndUpdate(
          token._id,
          {
            $set: {
              ...args,
            },
          },
          { new: true }
        );
        if (!userUpdated) {
          throw new Error("Error al actualizar el usuario.");
        }
        return userUpdated;
      } else {
        throw new Error("Usuario no autenticado.");
      }
    },

    changeRol: async (_, args, { req }, info) => {
      const isAuthenticate = await getAuthUser(req);
      const isAdmin = await myRolIs(req);
      if (isAuthenticate) {
        if (isAdmin.first && isAdmin.second) {
          const newUserRol = await User.findOneAndUpdate(
            { email: args.email },
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
        } else {
          throw new Error("Usuario no es Administrador.");
        }
      } else {
        throw new Error("Usuario no autenticado.");
      }
    },
    deleteUser: async (root, args, { req }, info) => {
      // Verifica que la lecture a eliminar exista
      const isAuthenticate = await getAuthUser(req);
      const isAdmin = await myRolIs(req);
      if (isAuthenticate) {
        if (isAdmin.first && isAdmin.second) {
          const user = await User.findByIdAndRemove(args.id);
          if (user) {
            return user;
          }
          //si no existe
          throw new Error(
            "El usuario que se intenta eliminar, no existe en la base de datos"
          );
        } else {
          throw new Error("Usuario no es Administrador.");
        }
      } else {
        throw new Error("Usuario no autenticado.");
      }
    },
    changePass: async (root, { password }, { req }, info) => {
      let header = req.headers.authorization;
      header = header.slice(7);
      const token = jwt.verify(header, APP_SECRET);
      password = await bcrypt.hash(password, 10);
      const userUpdated = await User.findByIdAndUpdate(
        token._id,
        {
          $set: {
            password,
          },
        },
        { new: true }
      );
      return true;
    },
  },
};
