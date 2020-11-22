import { Schema, model } from "mongoose";

const SprintSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
    default: "",
  },
  lecture: [{ type: Schema.Types.ObjectId, ref: "Lecture" }],
});

const Sprint = model("Sprint", SprintSchema);

export default Sprint;
