import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();
const { APP_SECRET, APP_REFRESH_SECRET } = process.env;

export const issueTokens = async ({ username, email, name, _id }) => {
  let token = jwt.sign({ username, email, name }, APP_SECRET);
  let refreshToken = jwt.sign({ username, email, name }, APP_REFRESH_SECRET);
  return {
    token,
    refreshToken,
  };
};
