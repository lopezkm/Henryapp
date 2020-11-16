import { Schema, model } from "mongoose";

const GroupSchema = Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  meetLink: {
      type: String,   // Link para ir a reunión en meet
    },
  users: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

const Group = model("Group", GroupSchema);

export default Group;
