import { model, Schema, Document, models, Model } from "mongoose";

const Question = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  required: { type: Boolean, required: true },
});
