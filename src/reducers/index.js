const initialState = {
  loading: true,
  error: false,
  data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_EVENTS':
      return { ...state, loading: true };
    case 'EVENTS_RECEIVED':
      return { ...state, data: action.payload, loading: false };
    case 'EVENTS_ERROR':
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
};
