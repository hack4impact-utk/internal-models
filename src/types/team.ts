import { z } from 'zod';
import zBase from './base';
import zTeamMember from './teamMember';
import zTerm from './term';
import zProject from './project';
import zRoleOnboarding from './onboarding/roleOnboarding';

const zTeam = zBase.extend({
  name: z.string(),
  members: zTeamMember.array(),
  terms: zTerm.array(),
  alwaysActive: z.boolean(),
  confirmedAt: z.date(),
  vaultWardenUrl: z.string().url().optional(),
  notionUrl: z.string().url().optional(),
  githubUrl: z.string().url().optional(),
  project: zProject,
  onboardings: zRoleOnboarding,
});

export type Team = z.infer<typeof zTeam>;

export default zTeam;
