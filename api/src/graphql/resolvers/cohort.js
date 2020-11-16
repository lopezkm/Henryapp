import { Cohort, User } from "../../models";
import { getAuthUser } from '../../functions/auth';

export default {
  Query: {
    cohorts: async () => {
      return await Cohort.find({});
    },
    cohort: async (_, args) => {
      const response = await Cohort.findById(args.id).populate("users");
      return response;
    },
  },
  Mutation: {
    // Crear nuevo usuario
    createCohort: async (root, args, { req }, info) => {
      const isAuthenticate = await getAuthUser(req);

      if (isAuthenticate) {
        // verificar que el user no exista en la DB
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
        // return 'Usuario no autorizado.';
        throw new Error(
          "Usuario no autenticado."
        )
      }
    },

    addUserToCohort: async (root, { userId, cohortId }, { req }, info) => {
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
      if (!newCohort) {
        // throw new Error("Ups algo salió mal.");
        return false;
      }

      return newCohort;
    },

    removeUserFromCohort: async (root, { userId, cohortId }, { req }, info) => {
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

      if (!updatedCohort) {
        return false;
      }

      return updatedCohort;
    },
  },
};
