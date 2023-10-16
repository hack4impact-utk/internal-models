import { z } from "zod";
import zQuestionBase from "./questionBase";

export const multipleChoiceTypes = [
  "Document",
  "Presentation",
  "Spreadsheet",
  "Drawing",
  "PDF",
  "Image",
  "Video",
  "Audio",
] as const;

const zMultipleChoiceType = z.enum(multipleChoiceTypes);
type MultipleChoiceType = z.infer<typeof zMultipleChoiceType>;

const zMultipleChoiceQuestion = zQuestionBase.extend({
  options: z.string().array(),
  allowOther: z.boolean(),
  type: zMultipleChoiceType,
});

export type MultipleChoiceQuestion = z.infer<typeof zMultipleChoiceQuestion>;

export default zMultipleChoiceQuestion;
