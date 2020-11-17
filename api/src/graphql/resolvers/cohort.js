import { Cohort, User } from "../../models";
import { getAuthUser } from "../../functions/auth";
import { myRolIs } from "../../functions/myRolIs";

export default {
  Query: {
    cohorts: async (_, args, { req }) => {
      const isAuthenticate = await getAuthUser(req);
      if (isAuthenticate) {
        return await Cohort.find({});
      } else {
        throw new Error("Usuario no autenticado.");
      }
    },
    cohort: async (_, args, { req }) => {
      const isAuthenticate = await getAuthUser(req);
      if (isAuthenticate) {
        const response = await Cohort.findById(args.id).populate("users");
        return response;
      } else {
        throw new Error("Usuario no autenticado.");
      }
    },
  },
  Mutation: {
    // Crear nuevo cohorte
    createCohort: async (root, args, { req }, info) => {
      const isAuthenticate = await getAuthUser(req);
      const isAdmin = await myRolIs(req);
      //verificar que Usuario esté loggeado
      if (isAuthenticate) {
        // verificar que el user sea Admin
        if (isAdmin.first && isAdmin.second) {
          const cohort = await Cohort.findOne({
            name: args.name,
          });

          if (cohort) {
            throw new Error("Este Cohorte ya se encuentra registrado.");
          }
          // El registro es valido
          const newCohort = await Cohort.create(args);
          return newCohort;
        } else {
          throw new Error("Usuario no es Administrador.");
        }
      } else {
        // return 'Usuario no autorizado.';
        throw new Error("Usuario no autenticado.");
      }
    },

    addUserToCohort: async (root, { userId, cohortId }, { req }, info) => {
      const isAuthenticate = await getAuthUser(req);
      if (isAuthenticate) {
        const newCohort = await Cohort.findByIdAndUpdate(
          cohortId,
          {
            $push: { users: userId },
          },
          {
            new: true,
            useFindAndModify: true,
          }
        );
      } else {
        throw new Error("Usuario no autenticado.");
      }
      if (!newCohort) {
        // throw new Error("Ups algo salió mal.");
        return false;
      }
      return newCohort;
    },

    removeUserFromCohort: async (root, { userId, cohortId }, { req }, info) => {
      const isAuthenticate = await getAuthUser(req);
      if (isAuthenticate) {
        const updatedCohort = await Cohort.findByIdAndUpdate(
          cohortId,
          {
            $pull: { users: userId },
          },
          {
            new: true,
            useFindAndModify: true,
          }
        );
      } else {
        throw new Error("Usuario no autenticado.");
      }
      if (!updatedCohort) {
        return false;
      }
      return updatedCohort;
    },
  },
};
