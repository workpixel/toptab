import {
  FETCH_NEWS_DETAILS_REQUEST,
  FETCH_NEWS_DETAILS_SUCCESS,
  FETCH_NEWS_DETAILS_FAILURE,
} from "../types/index.ts";

const initialState = {
  loading: false,
  newsDetailsList: {},
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // news details
    case FETCH_NEWS_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_NEWS_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        newsDetailsList: action && action.payload,
        error: "",
      };
    case FETCH_NEWS_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        newsDetailsList: {},
        error: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
