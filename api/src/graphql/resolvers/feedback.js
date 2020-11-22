import { Feedback, User } from "../../models";
import { getAuthUser } from "../../functions/auth";
import { myRolIs } from "../../functions/myRolIs";

export default {
  Query: {
    feedbacks: async (_, args, { req }) => {
      const isAuthenticate = await getAuthUser(req);
      const isAdmin = await myRolIs(req);
      if (isAuthenticate) {
        if (isAdmin.first && isAdmin.second) {
          return await Feedback.find();
        } else {
          throw new Error("Usuario no es Administrador.");
        }
      } else {
        throw new Error("Usuario no autenticado.");
      }
    },
    feedback: async (_, args, { req }) => {
      const isAuthenticate = await getAuthUser(req);
      const isAdmin = await myRolIs(req);
      if (isAuthenticate) {
        if (isAdmin.first && isAdmin.second) {
          const response = await Feedback.findById(args.id).populate("users");
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
    // Crear nuevo feedback
    createFeedback: async (root, args, { req }, info) => {
      const { average, softSkill, tecnicalSkill, leader, toId, from } = args;
      const isAuthenticate = await getAuthUser(req);
      if (isAuthenticate) {
        const newFeedback = await Feedback.create({
          average,
          softSkill,
          tecnicalSkill,
          leader,
          from,
        });
        const user = await User.findByIdAndUpdate(
          toId,
          {
            $push: { feedbacks: newFeedback._id },
          },
          {
            new: true,
            useFindAndModify: true,
          }
        );
        return user;
      } else {
        throw new Error("Usuario no autenticado.");
      }
    },
    deleteFeedback: async (root, args, { req }, info) => {
      // verificar que el feedback exista en la DB
      const isAuthenticate = await getAuthUser(req);
      const isAdmin = await myRolIs(req);
      if (isAuthenticate) {
        if (isAdmin.first && isAdmin.second) {
          const feedback = await Feedback.findOne({
            id: args.id,
          });
          if (feedback) {
            const deleteFeedback = await Feedback.delete(args);
            return deleteFeedback;
          }
          // Si no existe
          throw new Error(
            "El feedback que deseas eliminar no se encuentra en la base de datos."
          );
        } else {
          throw new Error("Usuario no es Administrador.");
        }
      } else {
        throw new Error("Usuario no autenticado.");
      }
    },
  },
};
