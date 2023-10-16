import { z } from 'zod';
import base from '../base';
import zFormQuestion from './formQuestion';
import zFormResponse from './formResponse';

export const responderTypes = ['Member', 'Student', 'Anyone'] as const;
export const zResponderType = z.enum(responderTypes);
export type ResponderType = z.infer<typeof zResponderType>;

const zForm = base.extend({
  questions: z.array(zFormQuestion),
  responderType: zResponderType,
  callbackUrl: z.string().optional(),
  isAnonymous: z.boolean(),
  responses: z.array(zFormResponse),
});

export type Form = z.infer<typeof zForm>;

export default zForm;
