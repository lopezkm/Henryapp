import { Sprint } from '../../models';

export default {
    Query: {
        //Get con todos los sprints y sus relacion con lecture
        sprints: async () =>{
            const response =  await Sprint.find()
            .populate("lecture")
            return response
        },
        //Get con un sprint y su relacion con una o muchas lecture 
        sprint: async (_, args) =>{
            const response =  await Sprint.findById(args.id)
            .populate("lecture")
            return response
        }
    },
    Mutation: {
        // Creamos una sprint
        createSprint: async (root, args, { req }, info) =>{
            // Existe ?
            const sprint = await Sprint.findOne({
                name: args.name
            });
            if( sprint ){
                throw new Error('Sprint ya cargada')
            }
            // si No Existe
            const newSprint = await Sprint.create(args);
            return newSprint;
        },

        // Agregamos una Lecture a un Sprint
        addLectureToSprint: async (root, { sprintId, lectureId }, { req }, info)=>{
            const newLecture = await Sprint.findByIdAndUpdate(sprintId,{
                $push: { lecture: lectureId}
            },{
                new: true, useFindAndModify: true //new true modifica y actualiza
            });
            if(!newLecture){
                return false;
            }
            return newLecture
        },  
        // Borramos una Lecture de una Sprint
        removeLectureToSprint: async(root, { sprintId, lectureId }, { req }, info)=>{
            const updateSprint = await Sprint.findByIdAndUpdate(sprintId, {
                $pull: { lecture: lectureId }
            },{
                new: true, useFindAndModify: true
            })
            if(!updateSprint){
                return false
            }
            return updateSprint
        }
    }
}