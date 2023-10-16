import { z } from 'zod';
import { ObjectId } from 'bson';

const zObjectId = z.string().refine((val) => ObjectId.isValid(val));

export default zObjectId;
