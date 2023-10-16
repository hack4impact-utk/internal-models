import { z } from 'zod';
import zQuestionBase from './questionBase';

export const fileTypes = [
  'Document',
  'Presentation',
  'Spreadsheet',
  'Drawing',
  'PDF',
  'Image',
  'Video',
  'Audio',
] as const;

export const zFileType = z.enum(fileTypes);
export type FileType = z.infer<typeof zFileType>;

export const zFileUploadQuestion = zQuestionBase.extend({
  supportedFileTypes: zFileType,
  maxFileSize: z.number().int(),
});

export type FileUploadQuestion = z.infer<typeof zFileUploadQuestion>;
export default zFileUploadQuestion;
