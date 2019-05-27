// @flow
import { INCREMENT_COUNTER_A, INCREMENT_COUNTER_B } from '../actions/counter';
import type { Action } from './types';

export default function counter(state: null, action: Action) {
  if (!state) {
    return {
      counterA: 0,
      counterB: 0
    };
  }

  switch (action.type) {
    case INCREMENT_COUNTER_A:
      return {
        ...state,
        counterA: state.counterA + 1
      };
    case INCREMENT_COUNTER_B:
      return {
        ...state,
        counterB: state.counterB + 1
      };
    default:
      return state;
  }
}
