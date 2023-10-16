import { z } from "zod";
import base from "../base";
import zFormResponse from "./formResponse";
import zFormQuestion from "./formQuestion";

export const responderTypes = ["Member", "Student", "Anyone"] as const;
export const zResponderType = z.enum(responderTypes);
export type ResponderType = z.infer<typeof zResponderType>;

const zForm = base.extend({
  questions: zFormQuestion.array(),
  responderType: zResponderType,
  callbackUrl: z.string().optional(),
  isAnonymous: z.boolean(),
  responses: zFormResponse.array(),
});

export type Form = z.infer<typeof zForm>;

export default zForm;
