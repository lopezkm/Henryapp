import { Lecture } from "../../models";
import { getAuthUser } from '../../functions/auth';
import { myRolIs } from "../../functions/myRolIs";

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
      const isAdmin = await myRolIs(req);
      if (isAuthenticate){
        if (isAdmin.first && isAdmin.second) {
          const lecture = await Lecture.findOne({
            name: args.name,
          });
          if (lecture) {
            throw new Error("La lecture ya se encuentra registrada.");
          }
          // El registro es valido
          const newLecture = await Lecture.create(args);
          return newLecture;
        } else {
          throw new Error("Usuario no es Administrador.");
        }
      } else {
        throw new Error("Usuario no autenticado.");
      }
    },
    // Elimina una lecture
    deleteLecture: async (root, args, { req }, info) => {
      // Verifica que la lecture a eliminar exista
      const isAuthenticate = await getAuthUser(req);
      const isAdmin = await myRolIs(req);
      if (isAuthenticate){
        if (isAdmin.first && isAdmin.second) {
          const lecture = await Lecture.findOneAndRemove({
            name: args.name,
          });
          if(lecture) {
            return lecture;
          }
          //si no existe
          throw new Error ('La lecture que se intenta eliminar, no existe en la base de datos');
        } else {
          throw new Error("Usuario no es Administrador.");
        }
      } else {
        throw new Error("Usuario no autenticado.");
      }
    },
    //Modificar una lecture
    updateLecture: async (root, args, { req }, info) => {
      // verificar que la lecture exista
      const isAuthenticate = await getAuthUser(req);
      const isAdmin = await myRolIs(req);
      if (isAuthenticate){
        if (isAdmin.first && isAdmin.second) {
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
        } else {
          throw new Error("Usuario no es Administrador.");
        }
      } else {
        throw new Error("Usuario no autenticado.");
      }
    },
  },
};
