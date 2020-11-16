import { Feedback, User } from "../../models";
import { getAuthUser } from '../../functions/auth';

export default {
    Query: {
      feedbacks: async () => {
        return await Feedback.find();
      },
      feedback: async (_, args) => {
        const response = await Feedback.findById(args.id).populate("users");
        return response;
      },
    },
    Mutation: {
      // Crear nuevo feedback
      createFeedback: async (root, args, { req }, info) => {

        const {average, softSkill, tecnicalSkill, leader, userId} = args;

        const newFeedback = await Feedback.create({average, softSkill, tecnicalSkill, leader});
        console.log(newFeedback);
        
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
      },
    },
  };

  const isAuthenticate = await getAuthUser(req);

      if (isAuthenticate)