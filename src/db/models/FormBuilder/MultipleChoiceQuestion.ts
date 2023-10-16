import { model, Schema, Document, models, Model } from "mongoose";
import { QuestionBaseSchema } from "./QuestionBase";
import {
  MultipleChoiceQuestion,
  multipleChoiceTypes,
} from "../../../types/FormBuilder/Questions/MultipleChoiceQuestion";

const MultipleChoiceQuestionSchema = QuestionBaseSchema.discriminator(
  "MultipleChoiceQuestion",
  new Schema({
    options: [{ type: Schema.Types.String, required: true }],
    allowOther: { type: Schema.Types.Boolean, required: true },
    type: {
      type: String,
      enum: multipleChoiceTypes,
      required: true,
    },
  })
);

export type MultipleChoiceQuestionDocument = Omit<
  MultipleChoiceQuestion,
  "_id"
> &
  Document;

export default (models.MultipleChoiceQuestion as Model<MultipleChoiceQuestionDocument>) ||
  model<MultipleChoiceQuestionDocument>(
    "MultipleChoiceQuestion",
    MultipleChoiceQuestionSchema,
    "questions"
  );
