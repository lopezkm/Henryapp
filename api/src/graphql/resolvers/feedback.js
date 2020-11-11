import { Feedback } from "../../models";

export default {
    Query: {
      feedbacks: async () => {
        return await Feedback.find();
      },
      feedback: async (_, args) => {
        return await Feedback.findById(args.id);
      },
    },
    Mutation: {
      // Crear nuevo feedback
      createFeedback: async (root, args, { req }, info) => {
        // verificar que el feedback no exista en la DB
        const feedback = await Feedback.findOne({
          id: args.id,
        });
  
        if (feedback) {
          throw new Error("El feedback ya se encuentra registrada.");
        }
        // El registro es valido
        const newFeedback = await Feedback.create(args);
        return newFeedback;
      },
      deleteFeedback: async (root, args, { req }, info) => {
        // verificar que el feedback exista en la DB
        const feedback = await Feedback.findOne({
          id: args.id,
        });
  
        if (feedback) {
            const deleteFeedback = await Feedback.delete(args);
            return deleteFeedback;
        }
        // Si no existe
        throw new Error("El feedback que deseas eliminar no se encuentra en la base de datos.");
      }
    },
  };