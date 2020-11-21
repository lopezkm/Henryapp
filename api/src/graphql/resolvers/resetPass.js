import { resetPass } from "../../functions/resetPass";

export default {
  Query: {
    resetPass: async (root, { email, url }, { req }, info) => {
      const response = await resetPass(email, url);
      console.log(response);
      return { mailed: response };
    },
  },
};
