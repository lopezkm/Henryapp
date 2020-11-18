import bcrypt from "bcrypt";
const { dir } = require("./dirMiddleware");
const fs = require("fs");
var sizeOf = require("image-size");

const saveFile = async (args) => {
  const name = args.file.name;
  const nL = name.length;
  const extension = name.substring(nL - 4, nL);
  const hashName = await bcrypt.hash(name, 6);
  try {
    // Use the mv() method to place the file somewhere on your server
    args.file.mv(`public/${hashName}${extension}`, async function (err) {
      if (err) throw new Error(err.message);
      const dimensions = sizeOf(`${dir}/${hashName}${extension}`);
      let imagen = {};
      imagen.name = `/${hashName}${extension}`;
      imagen.width = dimensions.width;
      imagen.height = dimensions.height;
      imagen.src = `http://localhost:3001/${hashName}${extension}`;
      imagen.thumbsrc = `http://localhost:3001/thumbs/300/${hashName}${extension}`;
      imagen.vertical = dimensions.width / dimensions.height < 1 ? true : false;
      return imagen;
    });
  } catch (err) {
    throw new Error(err.message);
  }
};
const deleteFile = async (name) => {
  try {
    fs.unlinkSync(dir + name);
    return true;
  } catch {
    return false;
  }
};
export { saveFile };
