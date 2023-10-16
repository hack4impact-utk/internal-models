import { z } from "zod";
import { zBase } from "../base";
import zFormQuestion from "./formQuestion";
import zFormSubmission from "./formSubmission";
import zObjectId from "../objectId";

export const responderTypes = ["Member", "Student", "Anyone"] as const;
export const zResponderType = z.enum(responderTypes);
export type ResponderType = z.infer<typeof zResponderType>;

const zForm = z.object({
  questions: z.array(zFormQuestion),
  responderType: zResponderType,
  callbackUrl: z.string().optional(),
  isAnonymous: z.boolean(),
  responses: z.array(zFormSubmission),
});

const zCreateFormRequest = zForm.extend({
  questions: z.array(zObjectId),
  responses: z.array(zObjectId),
});
const zFormResponse = zForm.extend(zBase.shape);

export type Form = z.infer<typeof zForm>;
export type CreateFormRequest = z.infer<typeof zCreateFormRequest>;
export type FormResponse = z.infer<typeof zFormResponse>;

export default zForm;
