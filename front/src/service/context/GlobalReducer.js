const actionType = {
  UPDATE_EVENTS: 'UPDATE_EVENTS',
  UPDATE_LEVEL_COUNT: 'UPDATE_LEVEL_COUNT',
  SORT_EVENTS: 'SORT_EVENTS',
};

const sortBy = (array, type) => array.sort((a, b) => {
  if (a[type] > b[type]) return 1;
  if (b[type] > a[type]) return -1;
  return 0;
});

function GlobalReducer(state, action) {
  switch (action.type) {
    case actionType.UPDATE_EVENTS:
      return { ...state, events: action.payload };
    case actionType.UPDATE_LEVEL_COUNT:
      return { ...state, countForLevel: { ...state.countForLevel, ...action.payload } };
    case actionType.SORT_EVENTS:
      return {
        ...state,
        events: sortBy(state.events, action.payload),
      };
    default:
      return state;
  }
}

export { actionType, GlobalReducer };
