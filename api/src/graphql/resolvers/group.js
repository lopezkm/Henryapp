import { Group, User } from "../../models";
import { getAuthUser } from '../../functions/auth';
import { myRolIs } from "../../functions/myRolIs";

export default {
  Query: {
    group: async (root, args, { req }) => {
      const isAuthenticate = await getAuthUser(req);
      if (isAuthenticate){
          return await Group.find({});
      } else {
        throw new Error("Usuario no autenticado.");
      }
    },
    groups: async (_, args, { req }) => {
      const isAuthenticate = await getAuthUser(req);
      const isAdmin = await myRolIs(req);
      if (isAuthenticate){
        if (isAdmin.first && isAdmin.second) {
          const response = await Group.findById(args.id).populate("users");
          return response;
        } else {
          throw new Error("Usuario no es Administrador.");
        }
      } else {
        throw new Error("Usuario no autenticado.");
      }
    },
  },
  Mutation: {
    // Crear nuevo grupo
    createGroup: async (root, args, { req }, info) => {
      const isAuthenticate = await getAuthUser(req);
      const isAdmin = await myRolIs(req);
      if (isAuthenticate) {
        if (isAdmin.first && isAdmin.second) {
          // verificar que el grupo no exista en la DB
          const group = await Group.findOne({
            name: args.name,
          });
          if (group) {
            throw new Error("Este grupo ya se encuentra creado.");
          }
          // El registro es valido
          const newGroup = await Group.create(args);
          return newGroup;
        } else {
          throw new Error("Usuario no es Administrador.");
        }
      } else {
        // return 'Usuario no autorizado.';
        throw new Error(
          "Usuario no autenticado."
        )
      }
    },

    addUserToGroup: async (root, { userId, groupId }, { req }, info) => {
      const isAuthenticate = await getAuthUser(req);
      const isAdmin = await myRolIs(req);
      if(isAuthenticate){
        if (isAdmin.first && isAdmin.second) {
          const newGroup = await Group.findByIdAndUpdate(
          groupId,
          {
              $push: { users: userId },
          },
          {
              new: true,
              useFindAndModify: true,
          }
          );
          if (!newGroup) {
          // throw new Error("Ups algo salió mal.");
            return false;
          }
          return newGroup;
        } else {
          throw new Error("Usuario no es Administrador.");
        }
      } else { 
        throw new Error(
          "Usuario no autenticado."
        )
      }
    },

    removeUserFromGroup: async (root, { userId, groupId }, { req }, info) => {
      const isAuthenticate = await getAuthUser(req);
      const isAdmin = await myRolIs(req);
      if(isAuthenticate){
        if (isAdmin.first && isAdmin.second) {
          const updatedGroup = await Group.findByIdAndUpdate(
          groupId,
          {
              $pull: { users: userId },
          },
          {
              new: true,
              useFindAndModify: true,
          }
          );
          if (!updatedGroup) {
          return false;
          }
          return updatedGroup;
        } else {
          throw new Error("Usuario no es Administrador.");
        }
      } else {
                  throw new Error(
            "Usuario no autenticado."
          )
      }
    },
  },
};
