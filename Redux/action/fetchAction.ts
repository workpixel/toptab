import axios from "axios";
import { Originalurl, HomePageurl, NewsCategories } from "../../service/service";
import {
  FETCH_FEED_LIST_REQUEST,
  FETCH_FEED_LIST_SUCCESS,
  FETCH_FEED_LIST_FAILURE,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE
} from "../types/index.ts";

export const fecthListRequest = () => {
  return {
    type: FETCH_FEED_LIST_REQUEST,
  };
};

export const fecthListSuccess = (feedList) => {
  return {
    type: FETCH_FEED_LIST_SUCCESS,
    payload: feedList,
  };
};

export const fetchListFailure = (error) => {
  return {
    type: FETCH_FEED_LIST_FAILURE,
    payload: error,
  };
};
export function fetchFeed() {
  return async function (dispatch) {
    try {
      dispatch(fecthListRequest());
      // const response = await axios.get(catUrl);
      const response = await axios.get(HomePageurl);
      dispatch(fecthListSuccess(response && response?.data));
      await dispatch(fecthListSuccess(response && response?.data));
    } catch (err) {
      dispatch(fetchListFailure(err.message));
    }
  };
};
// side navigation
export const fecthCategoriesRequest = () => {
  return {
    type: FETCH_CATEGORIES_REQUEST,
  };
};

export const fecthCategoriesSuccess = (feedList) => {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    payload: feedList,
  };
};

export const fetchCategoriesFailure = (error) => {
  return {
    type: FETCH_CATEGORIES_FAILURE,
    payload: error,
  };
};

export function fetchCategories() {
  return async function (dispatch) {
    try {
      dispatch(fecthCategoriesRequest());
      const response = await axios.get(NewsCategories);
      dispatch(fecthCategoriesSuccess(response && response.data.NewsCategory && response.data.NewsCategory));
    } catch (err) {
      dispatch(fetchCategoriesFailure(err.message));
    }
  };
};