import { model, Schema, Document, models, Model } from "mongoose";
import { FormSubmission } from "@/types/FormBuilder/formSubmission";

const FormResponseSchema = new Schema({
  form: { ref: "Form", type: Schema.Types.ObjectId, required: true },
  questionResponses: {
    type: [
      {
        question: {
          ref: "FormQuestion",
          type: Schema.Types.ObjectId,
          required: true,
        },
        answer: { type: Schema.Types.Mixed, required: false },
      },
    ],
    required: true,
  },
  responderEmail: { type: String, required: false },
});

export type FormResponseDocument = Omit<FormSubmission, "_id"> & Document;

export default (models.FormResponse as Model<FormResponseDocument>) ||
  model<FormResponseDocument>(
    "FormResponse",
    FormResponseSchema,
    "formResponses"
  );
