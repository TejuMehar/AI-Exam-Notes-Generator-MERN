import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    credit: {
      type: Number,
    default: 100,
      min: 0,
    },
    isCreditAvailable: {
      type: Boolean,
      default: true,
    },
    notes: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Notes",
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

export default User;
