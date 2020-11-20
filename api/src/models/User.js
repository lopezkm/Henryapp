import { Schema, model } from "mongoose";

const UserSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: "",
  },
  shortDescription: {
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
    default: "",
  },
  feedbacks: [{ type: Schema.Types.ObjectId, ref: "Feedback" }],

  //implementación del Rol
  rol: {
    type: String,
    default: "Admin",
  },
  //implementación de subirFotos
  picture: { type: Schema.Types.ObjectId, ref: "Picture" },
});

const User = model("User", UserSchema);

export default User;
