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
});

const Cohort = model("Cohort", CohortSchema);

export default Cohort;
