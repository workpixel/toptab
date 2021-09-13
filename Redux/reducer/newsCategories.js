import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
} from "../types/index.ts";

const initialState = {
  loading: false,
  categoriesList: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // catrgories
    case FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categoriesList: action.payload,
        error: "",
      };
    case FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        loading: false,
        categoriesList: {},
        error: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
