import { z } from 'zod';
import zOnboardingStep from './onboardingStep';

const zOnboardingStepStatus = z.object({
  step: zOnboardingStep,
  completed: z.boolean(),
});

export type OnboardingStepStatus = z.infer<typeof zOnboardingStepStatus>;

export default zOnboardingStepStatus;
