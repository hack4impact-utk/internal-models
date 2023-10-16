import { z } from "zod";
import zFormQuestion from "./formQuestion";
import base from "../base";
import zForm, { Form } from "./form";

const zBaseFormSubmission = base.extend({
  questionResponses: z.object({
    question: zFormQuestion,
    answer: z.union([z.string(), z.number()]).optional(),
  }),
  responderEmail: z.string().optional(),
});

export type FormSubmission = z.infer<typeof zBaseFormSubmission> & {
  form: Form;
};

export const zFormSubmission: z.ZodType<FormSubmission> =
  zBaseFormSubmission.extend({
    form: z.lazy(() => zForm),
  });

export default zFormSubmission;
