// import Joi from 'joi';
// import { registerValidate } from '../validators';
import bcrypt from 'bcrypt';
import { User } from '../../models';

export default {

  Query: {
    users: async () => {
      return await User.find();
    },
    profile: async (_, args) => {
      return await User.findById(args.id);
    },
    refreshToken: () => { }
  },
  Mutation: {

    // Crear nuevo usuario
    register: async (root, args, { req }, info) => {

      // verificar que el user no exista en la DB
      const user = await User.findOne({
        email: args.email
      });

      if (user) {
        throw new Error('El email ya se encuentra registrado.');
      }

      // El registro es valido
      args.password = await bcrypt.hash(args.password, 10);
      const newUser = await User.create(args);

      return newUser;
    }

  },

};