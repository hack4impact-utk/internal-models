import { z } from "zod";
import zQuestionBase from "./questionBase";

const zTextQuestion = zQuestionBase.extend({
  isParagraph: z.boolean(),
});

export type TextQuestion = z.infer<typeof zTextQuestion>;

export default zTextQuestion;
