import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();
const { APP_SECRET, APP_REFRESH_SECRET } = process.env;

export const myRolIs = (request) => {
  let header = request.headers.authorization;
  header = header.slice(7);
  let user = jwt.verify(header, APP_SECRET);
  let rol = user.rol;

  if (rol === "Estudiante") {
    return {
      first: false,
      second: false,
    };
  }
  if (rol === "PM") {
    return {
      first: true,
      second: false,
    };
  }
  if (rol === "Admin") {
    return {
      first: true,
      second: true,
    };
  }
};
