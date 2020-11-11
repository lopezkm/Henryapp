import { Sprint } from '../../models';

export default {
    Query: {
        sprints: async () =>{
            return await Sprint.find()
        }, 
        sprint: async (_, args) => {
            return await Sprint.findById(args.id)
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
        }
    }
}