import { Sprint } from '../../models/Sprint';
import root from '../typeDefs/root';

export default {
    Query: {
        sprints: async () => await Sprint.find(),
        sprint: async (_, args) => await Sprint.findById(args.id)
    },
    Mutation: {
        // Creamos una sprint
        createSprint: async (root, args, { req }, info) =>{
            // Existe ?
            const sprint = await Sprint.findOne({
                name: args.name
            });
            if( name ){
                throw new Error('Sprint ya cargada')
            }
            // si No Existe
            const newSprint = await Sprint.create(args);
            return newSprint
        }
    }
}