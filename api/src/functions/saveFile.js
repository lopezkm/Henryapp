import bcrypt from "bcrypt";
const { dir } = require("./dirMiddleware");
const fs = require("fs");
var sizeOf = require("image-size");

const saveFile = async (file) => {
  const { createReadStream, filename } = await file;
  console.log("file---------------------", file);
  const randomize = Math.floor(Math.random() * 1000000);

  const hashName = await bcrypt.hash("abcdeggfghijk", randomize);
  console.log(hashName);

  await new Promise((res) =>
    createReadStream()
      .pipe(createWriteStream(path.join(dir, "../images/", hashName)))
      .on("close", res)
  );
  console.log(res);
  const dimensions = sizeOf(res);
  let imagen = {};
  imagen.name = `/${hashName}.png`;
  imagen.width = dimensions.width;
  imagen.height = dimensions.height;
  imagen.src = `http://localhost:3001/${hashName}.png`;
  imagen.thumbsrc = `http://localhost:3001/thumbs/300/${hashName}.png`;
  imagen.vertical = dimensions.width / dimensions.height < 1 ? true : false;
  return imagen;
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
