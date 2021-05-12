const actionType = {
  UPDATE_EVENTS: 'UPDATE_EVENTS',
  UPDATE_LEVEL_COUNT: 'UPDATE_LEVEL_COUNT',
  ORDER_EVENTS: 'ORDER_EVENTS',
  CHANGE_DIRECTION_OF_EVENTS: 'CHANGE_DIRECTION_OF_EVENTS',
  SHOW_MORE_EVENTS: 'SHOW_MORE_EVENTS',
  FILTER_DATE: 'FILTER_DATE',
  FILTER_LEVEL: 'FILTER_LEVEL',
  FILTER_ORIGIN: 'FILTER_ORIGIN',
};

const filterLevel = (state, action) => {
  const { filters } = state;
  const { level } = filters;
  const newLevel = level.includes(action.payload)
    ? level.filter((element) => element !== action.payload)
    : [...level, action.payload];
  const newFilters = { ...filters, level: newLevel };

  return { ...state, filters: newFilters };
};

function GlobalReducer(state, action) {
  switch (action.type) {
    case actionType.UPDATE_EVENTS:
      return { ...state, events: action.payload };
    case actionType.UPDATE_LEVEL_COUNT:
      return { ...state, countForLevel: { ...state.countForLevel, ...action.payload } };
    case actionType.ORDER_EVENTS:
      return {
        ...state,
        order: { ...state.order, sortBy: action.payload }
      };
    case actionType.CHANGE_DIRECTION_OF_EVENTS:
      return {
        ...state,
        order: { ...state.order, direction: state.order.direction === 'ASC' ? 'DESC' : 'ASC' }
      };
    case actionType.SHOW_MORE_EVENTS:
      return {
        ...state,
        order: { ...state.order, pageSize: state.order.pageSize + action.payload }
      };
    case actionType.FILTER_DATE:
      return { ...state, filters: { ...state.filters, date: action.payload } };
    case actionType.FILTER_LEVEL:
      return filterLevel(state, action);
    case actionType.FILTER_ORIGIN:
      return { ...state, filters: { ...state.filters, origin: action.payload } };
    default:
      return state;
  }
}

export { actionType, GlobalReducer };
