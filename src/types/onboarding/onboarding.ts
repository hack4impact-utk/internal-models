import { z } from 'zod';
import zBase from '../base';
import zOnboardingStep from './onboardingStep';

const zOnboarding = zBase.extend({
  title: z.string(),
  description: z.string().optional(),
  steps: zOnboardingStep.array(),
});

export type Onboarding = z.infer<typeof zOnboarding>;

export default zOnboarding;
