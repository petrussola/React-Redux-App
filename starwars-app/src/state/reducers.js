import * as types from "./actionTypes";

const initialValue = 0;

export function countReducer(count = initialValue, action) {
  switch (action.type) {
    case types.INCREMENT:
      return count + 1;
    default:
      return count;
  }
}
