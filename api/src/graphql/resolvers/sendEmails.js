import { sendEmail } from "../../functions/sendEmail";
import { getAuthUser } from '../../functions/auth';

export default {
  Query: {
    sendEmail: async (root, { email, url }, { req }, info) => {
      const isAuthenticate = await getAuthUser(req);
      if (isAuthenticate){
        const response = await sendEmail(email, url);
        console.log(response);
        return { mailed: response };
      } else {
        throw new Error("Usuario no autenticado.");
      }
    },
  },
};
