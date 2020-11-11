import { Sprint } from '../../models';

export default {
    Query: {
        // sprints: async () =>{
        //     return await Sprint.find()
        // },
        sprints: async () =>{
            const response =  await Sprint.find()
            .populate("lecture")
            return response
        }, 
        sprint: async (_, args) =>{
            const response =  await Sprint.findById(args.id)
            .populate("lecture")
            console.log('Mi response',response)
            return response
        }
        // sprint: async (_, args) => {
        //      const response = await Sprint.findOne({ _id: args.id})
        //     .populate("lecture")
        //     .exec((err, data) =>{
        //         if(err){
        //             console.log(err.message)
        //         }
        //         console.log('Mi data...',data)
        //         return  data
        //     })
        //     return response
        // }
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
    }
}