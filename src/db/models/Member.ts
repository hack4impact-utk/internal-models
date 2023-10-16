import { Member } from '@/types/member';
import { Document, Model, Schema, model, models } from 'mongoose';

const MemberSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    netid: {
      type: String,
      required: true,
    },
    pronouns: {
      type: String,
      required: true,
    },
    major: {
      type: String,
      required: true,
    },
    class: {
      type: Number,
      required: true,
    },
    preferredName: {
      type: String,
      required: false,
    },
    githubUsername: {
      type: String,
      required: false,
    },
    linkedinUrl: {
      type: String,
      required: false,
    },
    confirmedAt: {
      type: Date,
      required: true,
    },
    imageUrl: {
      type: String,
      required: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

MemberSchema.index({ netid: 1 }, { unique: true });

export type MemberDocument = Omit<Member, '_id'> & Document;

export default (models.Member as Model<MemberDocument>) ||
  model<MemberDocument>('Member', MemberSchema);
