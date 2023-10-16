import { z } from 'zod';
import zBase from './base';
import zTeam, { Team } from './team';

const zProjectStatus = z.enum([
  'Prospective',
  'Accepted',
  'Rejected',
  'Active',
  'Completed',
]);

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

const zProject: z.ZodType<Project> = zBaseProject.extend({
  team: zTeam,
});

export default zProject;
