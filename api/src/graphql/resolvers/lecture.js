import { Lecture } from "../../models";
import { getAuthUser } from '../../functions/auth';

export default {
  Query: {
    lectures: async (root, args, { req }) => {
      const isAuthenticate = await getAuthUser(req);
      if (isAuthenticate){
        return await Lecture.find();
      } else {
        throw new Error("Usuario no autenticado.");
      }
    },
    lecture: async (_, args, { req }) => {
      const isAuthenticate = await getAuthUser(req);
      if (isAuthenticate){
        return await Lecture.findById(args.id);
      } else {
        throw new Error("Usuario no autenticado.");
      }
    },
  },
  Mutation: {
    // Crear nueva lecture
    createLecture: async (root, args, { req }, info) => {
      // verificar que la lecture no exista en la DB
      const isAuthenticate = await getAuthUser(req);
      if (isAuthenticate){
        const lecture = await Lecture.findOne({
          name: args.name,
        });
      } else {
        throw new Error("Usuario no autenticado.");
      }
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
      const isAuthenticate = await getAuthUser(req);
      if (isAuthenticate){
        const lecture = await Lecture.findOneAndRemove({
          name: args.name,
        });
      } else {
        throw new Error("Usuario no autenticado.");
      }
      if(lecture) {
        return lecture;
      }
      //si no existe
      throw new Error ('La lecture que se intenta eliminar, no existe en la base de datos');
    },
    //Modificar una lecture
    updateLecture: async (root, args, { req }, info) => {
      // verificar que la lecture exista
      const isAuthenticate = await getAuthUser(req);
      if (isAuthenticate){
        const updatedLecture = await Lecture.findByIdAndUpdate(args.id, {$set: 
          {name: args.name,
          embededLink: args.embededLink,
          description: args.description,
          teoriaLink: args.teoriaLink }
        }, {new: true});
      } else {
        throw new Error("Usuario no autenticado.");
      }
      if (updatedLecture) {
        return updatedLecture;
      }
      //si no existe
      throw new Error ("No se pudo modificar la lecture");
    },
  },
};
