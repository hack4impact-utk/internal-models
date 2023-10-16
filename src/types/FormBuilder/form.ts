import { z } from "zod";
import base from "../base";
import zQuestionBase, { Question } from "./Questions/questionBase";
import zFormResponse from "./formResponse";

const ResponderType = z.enum(["Member", "Student", "Anyone"]);
type ResponderType = z.infer<typeof ResponderType>;

const zForm = base.extend({
  questions: zQuestionBase.array(),
  responderType: ResponderType,
  callbackUrl: z.string().optional(),
  isAnonymous: z.boolean(),
  responses: zFormResponse,
});

export type Form = z.infer<typeof zForm>;

export default zForm;
