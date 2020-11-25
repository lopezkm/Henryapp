import { sendEmail } from "../../functions/sendEmail";
import { getAuthUser } from "../../functions/auth";
import { myRolIs } from "../../functions/myRolIs";
import Papa from "papaparse";

function emailIsValid(email) {
  return /\S+@\S+\.\S+/.test(email);
}

export default {
  Query: {
    sendEmail: async (root, { email, url }, { req }, info) => {
      const isAuthenticate = await getAuthUser(req);
      const isAdmin = await myRolIs(req);
      if (isAuthenticate) {
        if (isAdmin.first && isAdmin.second) {
          const response = await sendEmail(email, url);
          return { mailed: response };
        } else {
          throw new Error("Usuario no es Administrador.");
        }
      } else {
        throw new Error("Usuario no autenticado.");
      }
    },
  },
  Mutation: {
    uploadCSV: async (_, { file }, { req }, __) => {
      const { createReadStream, fileName } = await file;
      let data;
      let parseData;
      const mails = await createReadStream();
      mails
        .on("data", (chunk) => {
          data += chunk;
        })
        .on("end", () => {
          parseData = Papa.parse(data, { columns: "email" });
          const url = "http://localhost:3000/root/register";
          parseData.data.forEach((e) => {
            if (emailIsValid(e[10])) {
              sendEmail(e[10], url);
            }
          });
        });
      return { mailed: true };
    },
  },
};
