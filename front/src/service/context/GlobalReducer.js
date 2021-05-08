const actionType = {
  UPDATE_EVENTS: 'UPDATE_EVENTS',
  UPDATE_LEVEL_COUNT: 'UPDATE_LEVEL_COUNT',
};

function GlobalReducer(state, action) {
  switch (action.type) {
    case actionType.UPDATE_EVENTS:
      return { ...state, events: action.payload };
    case actionType.UPDATE_LEVEL_COUNT:
      return { ...state, countForLevel: { ...state.countForLevel, ...action.payload } };
    default:
      return state;
  }
}

export { actionType, GlobalReducer };
