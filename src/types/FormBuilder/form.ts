import { z } from "zod";
import base from "../base";
import zQuestionBase, { Question } from "./Questions/questionBase";
import zFormResponse from "./formResponse";
import zNumericQuestion from "./Questions/numericQuestion";
import zTextQuestion from "./Questions/textQuestion";
import zFileUploadQuestion from "./Questions/FileUploadQuestion";
import zMultipleChoiceQuestion from "./Questions/MultipleChoiceQuestion";

const ResponderType = z.enum(["Member", "Student", "Anyone"]);
type ResponderType = z.infer<typeof ResponderType>;

const zForm = base.extend({
  questions: z.union([
    zNumericQuestion,
    zTextQuestion,
    zFileUploadQuestion,
    zMultipleChoiceQuestion,
  ]),
  responderType: ResponderType,
  callbackUrl: z.string().optional(),
  isAnonymous: z.boolean(),
  responses: zFormResponse,
});

export type Form = z.infer<typeof zForm>;

export default zForm;
