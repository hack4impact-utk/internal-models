import { z } from "zod";
import zQuestionBase from "./questionBase";

const zNumericQuestion = zQuestionBase.extend({
  allowDecimals: z.boolean(),
  minVal: z.number(),
  maxVal: z.number(),
});
