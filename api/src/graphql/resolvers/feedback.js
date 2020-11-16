import { Feedback, User } from "../../models";
import { getAuthUser } from '../../functions/auth';

export default {
    Query: {
      feedbacks: async (_, { req }) => {
        const isAuthenticate = await getAuthUser(req);
        if (isAuthenticate){
          return await Feedback.find();
        } else {
          throw new Error("Usuario no autenticado.");
        }
      },
      feedback: async (_, args, { req }) => {
        const isAuthenticate = await getAuthUser(req);
        if (isAuthenticate){
          const response = await Feedback.findById(args.id).populate("users");
          return response;
        } else {
          throw new Error("Usuario no autenticado.");
        }
      },
    },
    Mutation: {
      // Crear nuevo feedback
      createFeedback: async (root, args, { req }, info) => {
        const {average, softSkill, tecnicalSkill, leader, userId} = args;
        const isAuthenticate = await getAuthUser(req);
        if (isAuthenticate){
          const newFeedback = await Feedback.create({average, softSkill, tecnicalSkill, leader});
          const user = await User.findByIdAndUpdate(
            userId,
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
        if (isAuthenticate){
          const feedback = await Feedback.findOne({
            id: args.id,
          });
        } else {
          throw new Error("Usuario no autenticado.");
        }
        if (feedback) {
            const deleteFeedback = await Feedback.delete(args);
            return deleteFeedback;
        }
        // Si no existe
        throw new Error("El feedback que deseas eliminar no se encuentra en la base de datos.");
      },
    },
  };