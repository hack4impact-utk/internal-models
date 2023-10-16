import { model, Schema, Document, models, Model } from 'mongoose';
import { Form, responderTypes } from '@/types/FormBuilder/form';

const FormSchema = new Schema({
  questions: [{ type: Schema.Types.ObjectId, ref: 'Question', required: true }],
  responder: {
    type: String,
    enum: responderTypes,
    required: true,
  },
  callbackUrl: { type: String, required: false },
  isAnonymous: { type: Boolean, required: true },
  responses: [
    { type: Schema.Types.ObjectId, ref: 'FormResponse', required: true },
  ],
});

export type FormDocument = Omit<Form, '_id'> & Document;

export default (models.Form as Model<FormDocument>) ||
  model<FormDocument>('Form', FormSchema, 'forms');
