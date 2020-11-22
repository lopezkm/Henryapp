import { Schema, model } from "mongoose";

const QualificationSchema = Schema({
  grade: {
    type: Number,
    required: true,
  },
  comentary: {
    type: String,
  },
  average: {
    type: Number,
    required: true,
  },
  //integrando modelo sprint
  sprint: { type: Schema.Types.ObjectId, ref: "Sprint", unique: true },
  //integrando modelo user
  user: { type: Schema.Types.ObjectId, ref: "User", unique: true },
});

const Qualification = model("Qualification", QualificationSchema);

export default Qualification;
