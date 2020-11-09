import { Schema, model } from "mongoose";

const LectureSchema = Schema({
  embededLink: {
    type: String,
    requerid: true,
    unique: true,
  },
  description: {
    type: String,
  },
  teoriaLink: {
    type: String,
  },
  comentaryLecture: {
    type: String,
  },
  sprint: {
    type: String,
    required: true,
  },
});

const Lecture = model("Lecture", LectureSchema);

export default Lecture;
