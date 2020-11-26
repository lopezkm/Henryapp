import { Schema, model } from "mongoose";

const GroupSchema = Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  PM: {
    type: String, // Link para ir a reunión en meet
  },
  cohort: { type: Schema.Types.ObjectId, ref: "Cohort" },
});

const Group = model("Group", GroupSchema);

export default Group;
