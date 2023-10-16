import { model, Schema, Document, models, Model } from "mongoose";
import { QuestionBaseSchema } from "./QuestionBase";
import { TextQuestion } from "../../../types/FormBuilder/Questions/textQuestion";

const TextQuestionSchema = QuestionBaseSchema.discriminator(
  "TextQuestion",
  new Schema({
    isParagraph: { type: Schema.Types.Boolean, required: true },
  })
);

export type TextQuestionDocument = Omit<TextQuestion, "_id"> & Document;

export default (models.TextQuestion as Model<TextQuestionDocument>) ||
  model<TextQuestionDocument>("TextQuestion", TextQuestionSchema, "questions");
