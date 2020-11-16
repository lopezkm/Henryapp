import { Schema, model } from "mongoose";

const GroupSchema = Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  students: [{ type: Schema.Types.ObjectId, ref: "User" }],

  pm: [{ type: Schema.Types.ObjectId, ref: "User" }],

  meetLink: {
    type: String,   // Link para ir a reunión en meet
  },
  //sprint: [{ type: Schema.Types.ObjectId, ref: "Sprint" }],
});

const Group = model("Group", GroupSchema);

export default Group;
