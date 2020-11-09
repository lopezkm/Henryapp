import { Cohort, User } from "../../models";

export default {
  Query: {
    cohorts: async () => {
      return await Cohort.find();
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
      const cohort = await Cohort.findById(cohortId);
      const user = await User.findById(userId);
      if (!cohort || !user) {
        //        throw new Error("Ups algo salió mal.");
        return false;
      }

      cohort.users.push(user);
      return true;
    },
  },
};
