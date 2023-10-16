import { z } from 'zod';
import { zTeamRole } from '../teamMember';
import zOnboarding from './onboarding';

const zRoleOnboarding = z.object({
  role: zTeamRole,
  onboardings: zOnboarding.array(),
});

export type RoleOnboarding = z.infer<typeof zRoleOnboarding>;

export default zRoleOnboarding;
