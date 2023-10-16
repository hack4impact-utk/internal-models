import { model, Schema, Document, models, Model } from "mongoose";

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
