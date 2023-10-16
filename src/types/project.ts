import { z } from 'zod';
import zBase from './base';
import zTeam, { Team } from './team';

export const projectStatuses = [
  'Prospective',
  'Accepted',
  'Rejected',
  'Active',
  'Completed',
] as const;

export const zProjectStatus = z.enum(projectStatuses);

export type ProjectStatus = z.infer<typeof zProjectStatus>;

const zBaseProject = zBase.extend({
  name: z.string(),
  contactName: z.string(),
  contactEmail: z.string().email(),
  status: zProjectStatus,
  description: z.string(),
  impactAreas: z.string().array(),
  orgUrl: z.string().url().optional(),
  deployUrl: z.string().url().optional(),
  notes: z.string().optional(),
});

type BaseProject = z.infer<typeof zBaseProject>;

export type Project = BaseProject & {
  team: Team;
};

export const zProject: z.ZodType<Project> = zBaseProject.extend({
  team: zTeam,
});

export default zProject;
