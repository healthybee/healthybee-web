import * as types from "./actionTypes";

export function loaduserSuccess(user) {
  return { type: types.LOAD_USER_SUCCESS, user };
}

export function loaduser(user) {
  return function(dispatch) {
    dispatch(loaduserSuccess(user));
  };
}
