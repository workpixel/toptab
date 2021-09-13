import axios from "axios";
import { news } from "../../service/service";
import {
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
  FETCH_NEWS_DETAILS_REQUEST,
  FETCH_NEWS_DETAILS_SUCCESS,
  FETCH_NEWS_DETAILS_FAILURE
} from "../types/index.ts";

export const fecthNewsRequest = () => {
  return {
    type: FETCH_NEWS_REQUEST,
  };
};

export const fecthNewsSuccess = (feedList) => {
  return {
    type: FETCH_NEWS_SUCCESS,
    payload: feedList,
  };
};

export const fetchNewsFailure = (error) => {
  return {
    type: FETCH_NEWS_FAILURE,
    payload: error,
  };
};
export function fetchNews(cid) {
  return async function (dispatch) {
    try {
      dispatch(fecthNewsRequest());
      const response = await axios.get(`${news}?cid=${cid}`);
      dispatch(fecthNewsSuccess(response && response?.data));
    } catch (err) {
      dispatch(fetchNewsFailure(err.message));
    }
  };
}
// news details
export const fecthNewsDetailsRequest = () => {
  return {
    type: FETCH_NEWS_DETAILS_REQUEST,
  };
};

export const fecthNewsDetailsSuccess = (feedList) => {
  return {
    type: FETCH_NEWS_DETAILS_SUCCESS,
    payload: feedList,
  };
};

export const fetchNewsDetailsFailure = (error) => {
  return {
    type: FETCH_NEWS_DETAILS_FAILURE,
    payload: error,
  };
};
export function fetchNewsDetails(url) {
  return async function (dispatch) {
    try {
      dispatch(fecthNewsDetailsRequest());
      const response = await axios.get(url);
      dispatch(fecthNewsDetailsSuccess(response && response?.data));
    } catch (err) {
      dispatch(fetchNewsDetailsFailure(err.message));
    }
  };
}
