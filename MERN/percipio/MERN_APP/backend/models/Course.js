import mongoose, { Schema } from "mongoose";

export const CourseSchema = new Schema({
  name: String,
  weight: Number,
  images: [String],
});

export const CourseModel = mongoose.model("Course", CourseSchema);
