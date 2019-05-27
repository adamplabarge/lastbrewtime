// @flow

export const INCREMENT_COUNTER_A = 'INCREMENT_COUNTER_A';
export const INCREMENT_COUNTER_B = 'INCREMENT_COUNTER_B';

export function incrementA() {
  return {
    type: INCREMENT_COUNTER_A
  };
}

export function incrementB() {
  return {
    type: INCREMENT_COUNTER_B
  };
}
