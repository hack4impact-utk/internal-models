import { model, Schema, Document, models, Model } from "mongoose";
import { QuestionBaseSchema } from "./QuestionBase";
import {
  FileUploadQuestion,
  fileTypes,
} from "../../../types/FormBuilder/Questions/FileUploadQuestion";

const FileUploadQuestionSchema = QuestionBaseSchema.discriminator(
  "FileUploadQuestion",
  new Schema({
    supportedFileTypes: {
      type: String,
      enum: fileTypes,
      required: true,
    },
    maxFileSize: { type: Schema.Types.Number, required: true },
  })
);

export type FileUploadQuestionDocument = Omit<FileUploadQuestion, "_id"> &
  Document;

export default (models.FileUploadQuestion as Model<FileUploadQuestionDocument>) ||
  model<FileUploadQuestionDocument>(
    "FileUploadQuestion",
    FileUploadQuestionSchema,
    "questions"
  );
