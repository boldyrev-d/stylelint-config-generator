import { NEXT_STEP, PREVIOUS_STEP, SKIP_STEP, RESET_CONFIG } from '../constants';

export function nextStep(id, value) {
  return {
    type: NEXT_STEP,
    payload: { id, value },
  };
}

export function prevStep() {
  return {
    type: PREVIOUS_STEP,
  };
}

export function skipStep(id) {
  return {
    type: SKIP_STEP,
    payload: { id },
  };
}

export function resetConfig() {
  return {
    type: RESET_CONFIG,
  };
}
