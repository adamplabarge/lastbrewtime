// @flow
import { INCREMENT_TIMER_A, INCREMENT_TIMER_B } from '../actions/timer';
import type { Action } from './types';

export default function counter(state: number = 0, action: Action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    default:
      return state;
  }
}
