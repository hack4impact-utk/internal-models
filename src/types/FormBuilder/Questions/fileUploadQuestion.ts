import { z } from "zod";
import zQuestionBase from "./questionBase";

const FileType = z.enum([
  "Document",
  "Presentation",
  "Spreadsheet",
  "Drawing",
  "PDF",
  "Image",
  "Video",
  "Audio",
]);
type FileType = z.infer<typeof FileType>;

const zFileUploadQuestion = zQuestionBase.extend({
  supportedFileTypes: FileType,
  maxFileSize: z.number().int(),
});
