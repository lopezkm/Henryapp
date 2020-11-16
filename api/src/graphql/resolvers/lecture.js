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
    // Crear nueva lecture
    createLecture: async (root, args, { req }, info) => {
      // verificar que la lecture no exista en la DB
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
    // Elimina una lecture
    deleteLecture: async (root, args, { req }, info) => {
      // Verifica que la lecture a eliminar exista
      const lecture = await Lecture.findOneAndRemove({
        name: args.name,
      });

      if(lecture) {
        return lecture;
      }
      //si no existe
      throw new Error ('La lecture que se intenta eliminar, no existe en la base de datos');
    },
    //Modificar una lecture
    updateLecture: async (root, args, { req }, info) => {
      // verificar que la lecture exista
      const updatedLecture = await Lecture.findByIdAndUpdate(args.id, {$set: 
        {name: args.name,
        embededLink: args.embededLink,
        description: args.description,
        teoriaLink: args.teoriaLink }
      }, {new: true});

      if (updatedLecture) {
        return updatedLecture;
      }
      //si no existe
      throw new Error ("No se pudo modificar la lecture");
    },
  },
};
