import { z } from "zod";
import base from "../base";
import zFormResponse from "./formResponse";
import zNumericQuestion from "./Questions/numericQuestion";
import zTextQuestion from "./Questions/textQuestion";
import zFileUploadQuestion from "./Questions/FileUploadQuestion";
import zMultipleChoiceQuestion from "./Questions/MultipleChoiceQuestion";

export const responderTypes = ["Member", "Student", "Anyone"] as const;
export const zResponderType = z.enum(responderTypes);
export type ResponderType = z.infer<typeof zResponderType>;

const zForm = base.extend({
  questions: z.union([
    zNumericQuestion,
    zTextQuestion,
    zFileUploadQuestion,
    zMultipleChoiceQuestion,
  ]),
  responderType: zResponderType,
  callbackUrl: z.string().optional(),
  isAnonymous: z.boolean(),
  responses: zFormResponse,
});

export type Form = z.infer<typeof zForm>;

export default zForm;
