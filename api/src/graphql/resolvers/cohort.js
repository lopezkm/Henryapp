import { Cohort, User } from "../../models";
import { getAuthUser } from "../../functions/auth";
import { myRolIs } from "../../functions/myRolIs";

export default {
  Query: {
    cohorts: async (_, args, { req }) => {
      const isAuthenticate = await getAuthUser(req);
      const isAdmin = await myRolIs(req);
      if (isAuthenticate) {
        if (isAdmin.first && isAdmin.second) {
          return await Cohort.find({});
        } else {
          throw new Error("Usuario no es Administrador.");
        }
      } else {
        throw new Error("Usuario no autenticado.");
      }
    },
    cohort: async (_, { cohortId }, { req }) => {
      const isAuthenticate = await getAuthUser(req);
      if (isAuthenticate) {
        const response = await Cohort.findById(cohortId);
        return response;
      } else {
        throw new Error("Usuario no autenticado.");
      }
    },
    getCohortUsers: async (_, { cohortId }, { req }) => {
      return await User.find({
        cohort: cohortId,
      });
    },
  },
  Mutation: {
    // Crear nuevo cohorte
    createCohort: async (root, args, { req }, info) => {
      const isAuthenticate = await getAuthUser(req);
      //  const isAdmin = await myRolIs(req);
      //verificar que Usuario esté loggeado
      if (isAuthenticate) {
        // verificar que el user sea Admin
        //    if (isAdmin.first && isAdmin.second) {
        const cohort = await Cohort.findOne({
          name: args.name,
        });

        if (cohort) {
          throw new Error("Este Cohorte ya se encuentra registrado.");
        }

        // El registro es valido
        const newCohort = await Cohort.create(args);
        return newCohort;
      } /* else {
          throw new Error("Usuario no es Administrador.");
        }
      }*/ else {
        // return 'Usuario no autorizado.';
        throw new Error("Usuario no autenticado.");
      }
    },

    addUserToCohort: async (root, { userId, cohortId }, { req }, info) => {
      const isAuthenticate = await getAuthUser(req);
      const isAdmin = await myRolIs(req);
      if (isAuthenticate) {
        if (isAdmin.first && isAdmin.second) {
          const newUser = await User.findByIdAndUpdate(
            userId,
            {
              $set: { cohort: cohortId },
            },
            {
              new: true,
              useFindAndModify: false,
            }
          );
          if (!newUser) {
            // throw new Error("Ups algo salió mal.");
            return false;
          }
          return await User.find({
            cohort: cohortId,
          });
        } else {
          throw new Error("Usuario no es Administrador.");
        }
      } else {
        throw new Error("Usuario no autenticado.");
      }
    },

    removeUserFromCohort: async (root, { userId, cohortId }, { req }, info) => {
      const isAuthenticate = await getAuthUser(req);
      const isAdmin = await myRolIs(req);
      if (isAuthenticate) {
        if (isAdmin.first && isAdmin.second) {
          const updatedUser = await User.findByIdAndUpdate(
            userId,
            {
              $unset: { cohort: 1 },
            },
            {
              new: true,
              useFindAndModify: false,
            }
          );
          if (!updatedUser) {
            return false;
          }
          return await User.find({
            cohort: cohortId,
          });
        } else {
          throw new Error("Usuario no es Administrador.");
        }
      } else {
        throw new Error("Usuario no autenticado.");
      }
    },
  },
};
