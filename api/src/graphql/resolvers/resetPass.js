import { resetPass } from "../../functions/resetPass";
import { User } from "../../models";

export default {
  Query: {
    resetPass: async (root, { email, url }, { req }, info) => {
      const user = await User.findOne({
        email: email,
      });
      if (!user) {
        throw new Error("El email no se encuentra en la base de datos.");
      }
      const response = await resetPass(email, url);
      console.log(response);
      return { mailed: response };
    },
  },
};
