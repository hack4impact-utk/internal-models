import { z } from "zod";
import zQuestionBase from "./questionBase";

const zNumericQuestion = zQuestionBase.extend({
  allowDecimals: z.boolean(),
  minVal: z.number(),
  maxVal: z.number(),
});

export type NumericQuestion = z.infer<typeof zNumericQuestion>;

export default zNumericQuestion;
