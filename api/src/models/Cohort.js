import { Schema, model } from "mongoose";

const CohortSchema = Schema({
  startingDate: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  users: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

const Cohort = model("Cohort", CohortSchema);

export default Cohort;
