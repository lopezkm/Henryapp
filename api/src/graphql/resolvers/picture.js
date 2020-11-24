import { join, parse } from "path";
import { User } from "../../models";
import { config } from "dotenv";
config();
const { APP_SECRET } = process.env;
import { createWriteStream } from "fs";
const URL = "http://localhost:3001";
import jwt from "jsonwebtoken";

export default {
  Mutation: {
    imageUploader: async (_, { file }, { req }, __) => {
      let header = req.headers.authorization;
      header = header.slice(7);
      const token = jwt.verify(header, APP_SECRET);
      let { filename, createReadStream } = await file;

      let stream = createReadStream();

      let { ext, name } = parse(filename);

      name = name.replace(/([^a-z0-9 ]+)/gi, "-").replace(" ", "_");

      let serverFile = join(
        __dirname,
        `../../uploads/${name}-${Date.now()}.jpg`
      );

      let writeStream = await createWriteStream(serverFile);
      await stream.pipe(writeStream);

      serverFile = `${URL}${serverFile.split("uploads")[1]}`;
      const newProfilePic = await User.findByIdAndUpdate(
        token._id,
        {
          picture: serverFile,
        },
        {
          new: true,
          useFindAndModify: false,
        }
      );

      return { src: serverFile };
    },
  },
};
