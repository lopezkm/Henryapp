import { sendEmail } from "../../functions/sendEmail";

export default {
  Query: {
    //Get con todos los sprints y sus relacion con lecture
    sendEmail: async (root, { email, url }, { req }, info) => {
      const response = await sendEmail(email, url);
      console.log(response);
      return { mailed: response };
    },
  },
};
