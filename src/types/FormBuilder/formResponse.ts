import base from "../base";
import zForm, { Form } from "./form";
import { z } from "zod";
import zFormQuestion from "./formQuestion";

const zBaseFormResponse = base.extend({
  questionResponses: z.object({
    question: zFormQuestion,
    answer: z.union([z.string(), z.number()]).optional(),
  }),
  responderEmail: z.string().optional(),
});

export type FormResponse = z.infer<typeof zBaseFormResponse> & { form: Form };

const zFormResponse: z.ZodType<FormResponse> = zBaseFormResponse.extend({
  form: z.lazy(() => zForm),
});

export default zFormResponse;
