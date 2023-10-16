import { model, Schema, Document, models, Model } from "mongoose";
import { FormResponse } from "../../../types/FormBuilder/formResponse";

const FormResponseSchema = new Schema({
  form: { ref: "Form", type: Schema.Types.ObjectId, required: true },
  questionResponses: [
    {
      question: {
        ref: "Question",
        type: Schema.Types.ObjectId,
        required: true,
      },
      answer: { type: Schema.Types.Mixed, required: false },
    },
  ],
  responderEmail: { type: String, required: false },
});

export type FormResponseDocument = Omit<FormResponse, "_id"> & Document;

export default (models.FormResponse as Model<FormResponseDocument>) ||
  model<FormResponseDocument>(
    "FormResponse",
    FormResponseSchema,
    "formResponses"
  );
