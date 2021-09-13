import {
  STORE_CID_SUCCESS,
  STORE_COMMON_TAB_INDEX_SUCCESS,
  STORE_COMMON_DATA_SUCCESS
} from "../types/index.ts";

const initialState = {
  loading: false,
  error: "",
  cId: "",
  commonTabIndex: 0,
  selectedData: {},

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_CID_SUCCESS:
      return {
        ...state,
        loading: false,
        cId: action.payload,
      };
      case STORE_COMMON_TAB_INDEX_SUCCESS:
      return {
        ...state,
        loading: false,
        commonTabIndex: action.payload,
      };
       case STORE_COMMON_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedData: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;