import { model, Schema, Document, models, Model } from 'mongoose';

export const QuestionBaseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  required: { type: Boolean, required: true },
});
