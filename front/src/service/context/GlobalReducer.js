const actionType = {
  SUBMIT_LOGIN: 'SUBMIT_LOGIN',
  SUCCESS_LOGIN: 'SUCCESS_LOGIN',
  FAIL_LOGIN: 'FAIL_LOGIN',
}

function GlobalReducer(state, action) {
  switch (action.type) {
  case actionType.SUBMIT_LOGIN:
    return { ...state, isFetching: true };
  case actionType.SUCCESS_LOGIN:
    console.log(action.payload)
    return { ...state, token: action.payload, isFetching: false };
  case actionType.FAIL_LOGIN:
    return { ...state, errorMessage: action.payload, isFetching: false };
  default:
    return state;
  }
}

export { actionType, GlobalReducer };
