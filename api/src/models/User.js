import { Schema, model } from "mongoose";

const UserSchema = Schema({
  name: {
    type: String,
    required: true,
  },
<<<<<<< HEAD
  lastname: {
    type: String,
    required: true,
  },
=======
>>>>>>> main
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: false,
    default: "",
  },
  description: {
    type: String,
    required: false,
    default: "",
  },
  gitHubLink: {
    type: String,
    required: false,
    default: "",
  },
  link: {
    type: String,
    required: false,
    default: "",
  },
  inscriptionDate: {
    type: String,
    default: new Date().toLocaleString().split(" ").join(" "),
  },

  //  lastConnection: new Date().toLocaleString().split(" ").join(" "),

  resetLink: {
    type: String,
    required: false,
    default: "",
  },
});

const User = model("User", UserSchema);

export default User;
