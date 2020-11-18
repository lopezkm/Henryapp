import { saveFile, deleteFile } from "../../functions/saveFile";
import { getAuthUser } from "../../functions/auth";
import { Picture, User } from "../../models";

export default {
  Mutation: {
    photoUpload: async (_, args, { req }, __) => {
      const imagen = await saveFile(args);
      if (imagen) {
        const newPic = await Picture.create(...imagen);
        // const UserPic= await User.
      } else {
        throw new Error("Problema con la imagen.");
      }
    },
  },
};
