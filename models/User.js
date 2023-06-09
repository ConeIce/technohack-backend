import mongoose from "mongoose";

const User = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  roomNumber: { type: String, required: true },
  location: { type: String },
  available: { type: Boolean },
  teacherId: { type: String },
});

export default mongoose.model("User", User);
