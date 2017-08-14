import rules from '../rules';
import { NEXT_STEP } from '../constants';

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
      return 0;

    default:
      return state;
  }
};
