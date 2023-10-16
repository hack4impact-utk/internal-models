import { z } from 'zod';
import objectIdSchema from './objectId';

const baseSchema = z.object({
  _id: objectIdSchema,
  createdAt: z.date(),
  updatedAt: z.date(),
});

export default baseSchema;
