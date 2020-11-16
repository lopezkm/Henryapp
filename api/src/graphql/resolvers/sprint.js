import { Sprint } from '../../models';
import { getAuthUser } from '../../functions/auth';

export default {
    Query: {
        //Get con todos los sprints y sus relacion con lecture
        sprints: async (root, args, { req }) =>{
            const isAuthenticate = await getAuthUser(req);
            if (isAuthenticate){
                const response =  await Sprint.find()
                .populate("lecture")
                return response;
            } else {
                throw new Error("Usuario no autenticado.");
            }
        },
        //Get con un sprint y su relacion con una o muchas lecture 
        sprint: async (_, args, { req }) =>{
            const isAuthenticate = await getAuthUser(req);
            if (isAuthenticate){
                const response =  await Sprint.findById(args.id)
                .populate("lecture")
                return response;
            } else {
                throw new Error("Usuario no autenticado.");
            }
        }
    },
    Mutation: {
        // Creamos una sprint
        createSprint: async (root, args, { req }, info) =>{
            // Existe ?
            const isAuthenticate = await getAuthUser(req);
            if (isAuthenticate){
                const sprint = await Sprint.findOne({
                    name: args.name
                });
            } else {
                throw new Error("Usuario no autenticado.");
            }
            if( sprint ){
                throw new Error('Sprint ya cargada')
            }
            // si No Existe
            const newSprint = await Sprint.create(args);
            return newSprint;
        },

        // Agregamos una Lecture a un Sprint
        addLectureToSprint: async (root, { sprintId, lectureId }, { req }, info)=>{
            const isAuthenticate = await getAuthUser(req);
            if (isAuthenticate){
                const newLecture = await Sprint.findByIdAndUpdate(sprintId,{
                    $push: { lecture: lectureId}
                },{
                    new: true, useFindAndModify: true //new true modifica y actualiza
                });
            } else {
                throw new Error("Usuario no autenticado.");
            }
            if(!newLecture){
                return false;
            }
            return newLecture
        },  
        // Borramos una Lecture de una Sprint
        removeLectureToSprint: async(root, { sprintId, lectureId }, { req }, info)=>{
            const isAuthenticate = await getAuthUser(req);
            if (isAuthenticate){
                const updateSprint = await Sprint.findByIdAndUpdate(sprintId, {
                    $pull: { lecture: lectureId }
                },{
                    new: true, useFindAndModify: true
                });
            } else {
                throw new Error("Usuario no autenticado.");
            }
            if(!updateSprint){
                return false
            }
            return updateSprint
        }
    }
}