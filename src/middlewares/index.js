import recommended from 'stylelint-config-recommended';
import standard from 'stylelint-config-standard';
import { NEXT_STEP, SKIP_STEP } from '../constants';

export default () => next => (action) => {
  const { type, payload } = action;

  if (type !== NEXT_STEP) return next(action);

  const { id, value } = payload;

  if (id in standard.rules) {
    if (value === standard.rules[id]) {
      return next({
        type: SKIP_STEP,
        payload: { id },
      });
    }
  } else if (id in recommended.rules) {
    if (value === recommended.rules[id]) {
      return next({
        type: SKIP_STEP,
        payload: { id },
      });
    }
  }

  return next(action);
};
