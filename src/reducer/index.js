import { Map } from 'immutable';
import rules from '../rules';
import {
  NEXT_STEP,
  PREVIOUS_STEP,
  SKIP_STEP,
  RESET_CONFIG,
  DISPLAY_CONFIG,
  DISPLAY_OPTIONS,
} from '../constants';

const defaultState = new Map({
  currentStep: 0,
  mode: DISPLAY_OPTIONS,
  config: new Map({
    extends: 'stylelint-config-standard',
    rules: new Map({}),
  }),
  rules,
});

export default (state = defaultState, action) => {
  const { type, payload } = action;
  const currentStep = state.get('currentStep');

  switch (type) {
    case NEXT_STEP:
      if (currentStep + 1 < rules.length) {
        return state
          .set('currentStep', currentStep + 1)
          .setIn(['config', 'rules', payload.id], payload.value);
      }
      return state
        .set('mode', DISPLAY_CONFIG)
        .setIn(['config', 'rules', payload.id], payload.value);

    case PREVIOUS_STEP:
      if (currentStep > 0) {
        return state.set('currentStep', currentStep - 1);
      }
      return state;

    case SKIP_STEP:
      if (currentStep + 1 < rules.length) {
        return state.set('currentStep', currentStep + 1).deleteIn(['config', 'rules', payload.id]);
      }
      return state.set('mode', DISPLAY_CONFIG);

    case RESET_CONFIG:
      return state
        .set('currentStep', 0)
        .set('mode', DISPLAY_OPTIONS)
        .setIn(['config', 'rules'], new Map({}));

    default:
      return state;
  }
};
