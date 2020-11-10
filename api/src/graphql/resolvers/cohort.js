import { Cohort, User } from "../../models";

export default {
  Query: {
    cohorts: async () => {
      return await Cohort.find({});
    },
    cohort: async (_, args) => {
      return await Cohort.findById(args.id);
    },
  },
  Mutation: {
    // Crear nuevo usuario
    createCohort: async (root, args, { req }, info) => {
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
    },

    addUserToCohort: async (root, { userId, cohortId }, { req }, info) => {
      const newCohort = await Cohort.findByIdAndUpdate(cohortId, {
        $push: { users: userId }
      }, {
        new: true, useFindAndModify: true
      });
      if (!newCohort) {
        // throw new Error("Ups algo salió mal.");
        return false;
      }

      return newCohort;
    },

    removeUserFromCohort: async (root, { userId, cohortId }, { req }, info) => {
      const updatedCohort = await Cohort.findByIdAndUpdate(cohortId, {
        $pull: { users: userId }
      }, {
        new: true, useFindAndModify: true
      });

      if (!updatedCohort) {
        return false;
      }

      return updatedCohort;
    },


  },
};
