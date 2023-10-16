import { Document, Model, Schema, model, models } from 'mongoose';

const TeamSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    project: {
      type: Schema.Types.ObjectId,
      ref: 'Project',
      required: false,
    },
    terms: {
      type: [String],
      required: true,
    },
    alwaysActive: {
      type: Boolean,
      required: true,
    },
    confirmedAt: {
      type: Date,
      required: true,
    },
    vaultWardenUrl: {
      type: String,
      required: false,
    },
    notionUrl: {
      type: String,
      required: false,
    },
    githubUrl: {
      type: String,
      required: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
