import { z } from 'zod';
import { TeamRole } from '../teamMember';
import zOnboarding from './onboarding';

export const zRoleOnboarding = z.object({
  role: TeamRole,
  onboardings: z.array(zOnboarding),
});

export type RoleOnboarding = z.infer<typeof zRoleOnboarding>;

export default zRoleOnboarding;
