import { z } from 'zod';
import { ObjectId } from 'bson';

const objectIdSchema = z.string().refine((val) => ObjectId.isValid(val));

export default objectIdSchema;
