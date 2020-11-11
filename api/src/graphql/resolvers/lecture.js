import { Lecture } from "../../models";

export default {
  Query: {
    lectures: async () => {
      return await Lecture.find();
    },
    lecture: async (_, args) => {
      return await Lecture.findById(args.id);
    },
  },
  Mutation: {
    // Crear nuevo usuario
    createLecture: async (root, args, { req }, info) => {
      // verificar que el user no exista en la DB
      const lecture = await Lecture.findOne({
        name: args.name,
      });

      if (lecture) {
        throw new Error("La lecture ya se encuentra registrada.");
      }
      // El registro es valido
      const newLecture = await Lecture.create(args);
      return newLecture;
    },
  },
};
