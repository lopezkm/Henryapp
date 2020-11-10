import { Schema, model } from "mongoose";

const UserSchema = Schema({
  name: {
    type: String,
    requerid: true,
  },
  email: {
    type: String,
    unique: true,
    requerid: true,
  },
  password: {
    type: String,
    requerid: true,
  },
  picture: {
    type: String,
    requerid: false,
    default: "",
  },
  description: {
    type: String,
    requerid: false,
    default: "",
  },
  gitHubLink: {
    type: String,
    requerid: false,
    default: "",
  },
  link: {
    type: String,
    requerid: false,
    default: "",
  },
  inscriptionDate: {
    type: String,
    default: new Date().toLocaleString().split(" ").join(" "),
  },

  //  lastConnection: new Date().toLocaleString().split(" ").join(" "),

  resetLink: {
    type: String,
    requerid: false,
    default: "",
  },
});

const User = model("User", UserSchema);

export default User;
