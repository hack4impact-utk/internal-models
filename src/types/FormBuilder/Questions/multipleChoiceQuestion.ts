import { z } from "zod";
import zQuestionBase from "./questionBase";

const MultipleChoiceType = z.enum([
  "Document",
  "Presentation",
  "Spreadsheet",
  "Drawing",
  "PDF",
  "Image",
  "Video",
  "Audio",
]);
type MultipleChoiceType = z.infer<typeof MultipleChoiceType>;

const zMultipleChoiceQuestion = zQuestionBase.extend({
  options: z.string().array(),
  allowOther: z.boolean(),
  type: MultipleChoiceType,
});
