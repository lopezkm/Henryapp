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
          return await Cohort.find({})
            .populate('students', '_id name lastname email');
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

    // Actualizar nuevo cohorte
    updateCohort: async (root, args, { req }, info) => {
      const isAuthenticate = await getAuthUser(req);
      //  const isAdmin = await myRolIs(req);
      //verificar que Usuario esté loggeado
      if (isAuthenticate) {
        // El registro es valido
        const id = args._id;
        delete args._id;
        const newCohort = await Cohort.findByIdAndUpdate(id, {
          ...args
        }, {
          new: true,
          useFindAndModify: true,
        });
        return newCohort;
      } /* else {
              throw new Error("Usuario no es Administrador.");
            }
          }*/ else {
        // return 'Usuario no autorizado.';
        throw new Error("Usuario no autenticado.");
      }
    },

    deleteCohort: async (root, { id }, { req }, info) => {
      const isAuthenticate = await getAuthUser(req);
      //  const isAdmin = await myRolIs(req);
      //verificar que Usuario esté loggeado
      if (isAuthenticate) {

        return await Cohort.findByIdAndDelete(id);
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
          const userUpdated = await User.findByIdAndUpdate(
            userId,
            {
              $set: { cohort: cohortId },
            },
            {
              new: true,
              useFindAndModify: false,
            }
          );
          const cohortUpdated = await Cohort.findByIdAndUpdate(
            cohortId,
            {
              $push: { students: userId },
            },
            {
              new: true,
              useFindAndModify: true,
            }
          );
          if (!userUpdated || !cohortUpdated) {
            throw new Error("Error en el servidor.");
          }
          return await Cohort.findById(cohortId)
            .populate('students', '_id name lastname email');
        } else {
          throw new Error("Usuario no es Administrador.");
        }
      } else {
        throw new Error("Usuario no autenticado.");
      }
    },

    addInstructorToCohort: async (root, { instructorName, cohortId }, { req }, info) => {
      const isAuthenticate = await getAuthUser(req);
      const isAdmin = await myRolIs(req);
      if (isAuthenticate) {
        if (isAdmin.first && isAdmin.second) {
          const cohortUpdated = await Cohort.findByIdAndUpdate(
            cohortId,
            {
              instructor: instructorName,
            },
            {
              new: true,
              useFindAndModify: true,
            }
          );
          if (!cohortUpdated) {
            throw new Error("Error en el servidor.");
          }
          return await Cohort.findById(cohortId);
        } else {
          throw new Error("Usuario no es Administrador.");
        }
      } else {
        throw new Error("Usuario no autenticado.");
      }
    },

    removeInstructorToCohort: async (root, { cohortId }, { req }, info) => {
      const isAuthenticate = await getAuthUser(req);
      const isAdmin = await myRolIs(req);
      if (isAuthenticate) {
        if (isAdmin.first && isAdmin.second) {
          const cohortUpdated = await Cohort.findByIdAndUpdate(
            cohortId,
            {
              instructor: '',
            },
            {
              new: true,
              useFindAndModify: false,
            }
          );
          if (!cohortUpdated) {
            throw new Error("Error en el servidor.");
          }
          return await Cohort.findById(cohortId);
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
