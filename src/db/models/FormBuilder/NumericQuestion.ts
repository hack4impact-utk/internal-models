import { model, Schema, Document, models, Model } from "mongoose";
import { QuestionBaseSchema } from "./QuestionBase";
import { NumericQuestion } from "../../../types/FormBuilder/Questions/numericQuestion";

const NumericQuestionSchema = QuestionBaseSchema.discriminator(
  "NumericQuestion",
  new Schema({
    allowDecimals: { type: Schema.Types.Boolean, required: true },
    minVal: { type: Schema.Types.Number, required: false },
    maxVal: { type: Schema.Types.Number, required: false },
  })
);

export type NumericQuestionDocument = Omit<NumericQuestion, "_id"> & Document;

export default (models.NumericQuestion as Model<NumericQuestionDocument>) ||
  model<NumericQuestionDocument>(
    "NumericQuestion",
    NumericQuestionSchema,
    "questions"
  );
