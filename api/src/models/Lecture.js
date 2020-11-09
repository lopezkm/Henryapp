import { Schema, model } from "mongoose";

const LectureSchema = Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
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
  //sprint: [{ type: Schema.Types.ObjectId, ref: "Sprint" }],
});

const Lecture = model("Lecture", LectureSchema);

export default Lecture;
