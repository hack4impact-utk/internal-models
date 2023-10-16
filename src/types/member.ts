import { z } from 'zod';
import zBase from './base';
import zTeamMember from './teamMember';
import zTerm from './term';
import zOnboardingStatus from './onboarding/onboardingStatus';

export const OrganizationRole = z.enum([
  'Director',
  'Executive',
  'Member',
  'Alumni',
]);
export type OrganizationRole = z.infer<typeof OrganizationRole>;

export const zTermMember = z.object({
  term: zTerm,
  orgRole: OrganizationRole,
});
export type TermMember = z.infer<typeof zTermMember>;

const zMember = zBase.extend({
  firstName: z.string(),
  lastName: z.string(),
  netid: z.string(),
  pronouns: z.string(),
  major: z.string(),
  class: z.number(),
  preferredName: z.string().optional(),
  githubUsername: z.string().optional(),
  linkedinUrl: z.string().url().optional(),
  confirmedAt: z.date(),
  imageUrl: z.string().url().optional(),
  teams: zTeamMember.array(),
  activeTerms: zTermMember.array(),
  onboardings: zOnboardingStatus.array(),
});

export type Member = z.infer<typeof zMember>;

export default zMember;
