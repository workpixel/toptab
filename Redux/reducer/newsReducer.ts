import {
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
} from "../types/index.ts";

const initialState = {
  loading: false,
  newList: {},
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        newList: action && action.payload,
        error: "",
      };
    case FETCH_NEWS_FAILURE:
      return {
        ...state,
        loading: false,
        newList: {},
        error: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
