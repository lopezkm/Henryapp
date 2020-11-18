import { Schema, model } from "mongoose";

const PictureSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
  thumbSrc: {
    type: String,
    required: true,
  },
  heigth: {
    type: Number,
    required: true,
  },
  width: {
    type: Number,
    required: true,
  },
  vertical: {
    type: Boolean,
    required: true,
  },
});

const Picture = model("Picture", PictureSchema);

export default Picture;
