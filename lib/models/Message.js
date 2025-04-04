import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Message ||
  mongoose.model("Message", MessageSchema);
