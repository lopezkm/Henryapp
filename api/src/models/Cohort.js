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
  groups: [{ type: Schema.Types.ObjectId, ref: "Group" }],
  sprints: [{ type: Schema.Types.ObjectId, ref: "Sprint" }],
  instructor: {
    type: String,
    required: false,
  },
  students: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

const Cohort = model("Cohort", CohortSchema);

export default Cohort;
