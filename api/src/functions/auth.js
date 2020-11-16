import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();
const { APP_SECRET, APP_REFRESH_SECRET } = process.env;
import { User } from "../models";
import { AuthenticationError } from "apollo-server-express";

//prettier-ignore
export const issueTokens = async ({ username, email, name, _id }) => {
  let token = await jwt.sign({ username, email, name, _id }, APP_SECRET, { expiresIn: 60 * 60 * 24 });
  let refreshToken = await jwt.sign({ username, email, name, _id }, APP_REFRESH_SECRET, { expiresIn: 60 * 60 * 24 });
  return {
    token,
    refreshToken,
  };
};

//prettier-ignore
export const getAuthUser = async (request, requiresAuth = false) => {

  let header = request.headers.authorization;
  header = header.slice(7);

  if (header) {

    const token = jwt.verify(header, APP_SECRET);
    let authUser = await User.findById(token._id);

    if (!authUser) {
      return false;
    }

    // if (requiresAuth) {
    //   return user;
    // }

    return true;
  } else {
    return false;
  }
}

export const getRefreshTokenUser = async (request) => {
  const header = request.headers.refreshToken;
  if (header) {
    const token = jwt.verify(header, APP_SECRET);
    let authUser = await User.findById(token.id);
    if (!authUser) {
      throw new AuthenticationError("token invalido, autenticación fallida");
    }
    if (requiresAuth) {
      return user;
    }
    return {
      user: {
        _id: "",
        name: "",
        lastname: "",
        email: "",
        insciptionDate: "",
      },
    };
  }
};
