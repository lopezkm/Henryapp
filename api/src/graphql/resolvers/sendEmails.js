import { sendEmail } from "../../functions/sendEmail";
import { getAuthUser } from '../../functions/auth';
import { myRolIs } from "../../functions/myRolIs";

export default {
  Query: {
    sendEmail: async (root, { email, url }, { req }, info) => {
      const isAuthenticate = await getAuthUser(req);
      const isAdmin = await myRolIs(req);
      if (isAuthenticate){
        if (isAdmin.first && isAdmin.second) {
          const response = await sendEmail(email, url);
          console.log(response);
          return { mailed: response };
        } else {
          throw new Error("Usuario no es Administrador.");
        }
      } else {
        throw new Error("Usuario no autenticado.");
      }
    },
  },
};
