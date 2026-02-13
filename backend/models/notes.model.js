import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    topic: {
      type: String,
      required: true,
    },
    classLevel: {
      type: String,
    },
    examType: {
      type: String,
    },
    revisionMode: {
      type: Boolean,
    },
    includeDiagram: {
      type: Boolean,
    },
    includeChart: {
      type: Boolean,
    },
    content : {
        type : mongoose.Schema.Types.Mixed,
        required: true
    }
  },
  { timestamps: true },
);

const Notes = mongoose.model("Notes", noteSchema);

export default Notes;
