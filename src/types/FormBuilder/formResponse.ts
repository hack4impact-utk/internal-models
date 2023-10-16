import { z } from "zod";
import zFormQuestion from "./formQuestion";
import base from "../base";
import zForm, { Form } from "./form";

const zBaseFormResponse = base.extend({
  questionResponses: z.object({
    question: zFormQuestion,
    answer: z.union([z.string(), z.number()]).optional(),
  }),
  responderEmail: z.string().optional(),
});

export type FormResponse = z.infer<typeof zBaseFormResponse> & { form: Form };

export const zFormResponse: z.ZodType<FormResponse> = zBaseFormResponse.extend({
  form: z.lazy(() => zForm),
});

export default zFormResponse;
