import { z } from 'zod';
import zObjectId from './objectId';

const zBase = z.object({
  _id: zObjectId,
  createdAt: z.date(),
  updatedAt: z.date(),
});

export default zBase;
