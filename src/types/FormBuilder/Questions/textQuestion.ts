import { z } from "zod";
import zQuestionBase from "./questionBase";

const zTextQuestion = zQuestionBase.extend({
  isParagraph: z.boolean(),
});
