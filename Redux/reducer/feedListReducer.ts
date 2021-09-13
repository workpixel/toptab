import {
  FETCH_FEED_LIST_REQUEST,
  FETCH_FEED_LIST_SUCCESS,
  FETCH_FEED_LIST_FAILURE,
} from "../types/index.ts";

const initialState = {
  loading: false,
  feedList: {},
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FEED_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_FEED_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        feedList: action && action.payload,
        error: "",
      };
    case FETCH_FEED_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        feedList: {},
        error: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
