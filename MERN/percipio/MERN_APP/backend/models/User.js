import mongoose, { Schema } from "mongoose";

export const UserSchema = new Schema({
  user: String,
  city: String,
});

export const UserModel = mongoose.model("User", UserSchema);
