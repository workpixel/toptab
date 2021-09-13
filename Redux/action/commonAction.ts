import {
  STORE_CID_SUCCESS,
  STORE_COMMON_TAB_INDEX_SUCCESS,
  STORE_COMMON_DATA_SUCCESS
} from "../types/index.ts";

export const storeCidSuccess = (cid) => {
  return {
    type: STORE_CID_SUCCESS,
    payload: cid
  };
};

export const storeCommonTabIndex = (index) => {
  return {
    type: STORE_COMMON_TAB_INDEX_SUCCESS,
    payload: index
  };
} 

export const getSelectedListDetailsSuccess = (data) => {
  return {
    type: STORE_COMMON_DATA_SUCCESS,
    payload: data,
  };
};

export const storeCommonData = (param) => {
  return (dispatch) => {
    dispatch(getSelectedListDetailsSuccess(param));
  };
};