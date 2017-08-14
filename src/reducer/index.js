import rules from '../rules';
import { NEXT_STEP, PREVIOUS_STEP, SKIP_STEP } from '../constants';

const defaultState = {
  currentStep: 0,
  mode: 'displayOptions',
  config: {
    extends: 'stylelint-config-standard',
    rules: {},
  },
  rules,
};

export default (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case NEXT_STEP:
      if (state.currentStep + 1 < rules.length) {
        return {
          ...state,
          currentStep: state.currentStep + 1,
          config: {
            ...state.config,
            rules: {
              ...state.config.rules,
              [payload.id]: payload.value,
            },
          },
        };
      }
      return {
        ...state,
        config: {
          ...state.config,
          rules: {
            ...state.config.rules,
            [payload.id]: payload.value,
          },
        },
        mode: 'displayConfig',
      };

    case PREVIOUS_STEP:
      return {
        ...state,
        currentStep: state.currentStep - 1,
      };

    case SKIP_STEP:
      if (state.currentStep + 1 < rules.length) {
        return {
          ...state,
          currentStep: state.currentStep + 1,
        };
      }
      return {
        ...state,
        mode: 'displayConfig',
      };

    default:
      return state;
  }
};
