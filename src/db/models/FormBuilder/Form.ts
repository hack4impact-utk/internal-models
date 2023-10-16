import { model, Schema, Document, models, Model } from "mongoose";

const FormSchema = new Schema({
  questions: [{ type: Schema.Types.ObjectId, ref: "Question", required: true }],
  responder: {
    type: String,
    enum: ["Member", "Student", "Anyone"],
    required: true,
  },
  callbackUrl: { type: String, required: false },
  isAnonymous: { type: Boolean, required: true },
  responses: [
    { type: Schema.Types.ObjectId, ref: "FormResponse", required: true },
  ],
});
