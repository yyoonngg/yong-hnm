import { authenticateActions } from "../reducers/authenticateReducer";
function login(id, password) {
  return (dispatch, getState) => {
    //dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } });
    dispatch(authenticateActions.loginSuccess({ id, password }));
  };
}

export const authenticateAction = { login };
