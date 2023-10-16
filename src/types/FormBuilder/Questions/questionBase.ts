import { z } from "zod";
import base from "../../base";
import zForm, { Form } from "../form";

const zQuestionBase = base.extend({
  title: z.string(),
  description: z.string(),
  required: z.boolean(),
});

export type Question = z.infer<typeof zQuestionBase>;

export default zQuestionBase;
