import { Schema, model } from "mongoose";

const FeedbackSchema = Schema({
  average: {
    type: Number,
    required: true,
  },
  softSkill: {
    type: Number,
    required: true,
  },
  tecnicalSkill: {
    type: Number,
    required: true,
  },
  leader: {
    type: Boolean,
    required: true,
  },
  comentary: {
    type: String,
  },
  from: { type: Schema.Types.ObjectId, ref: "User" },
});

const Feedback = model("Feedback", FeedbackSchema);

export default Feedback;
