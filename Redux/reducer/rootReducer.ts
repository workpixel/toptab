import { combineReducers } from "redux";
import Feed  from "./feedListReducer";
import CommonReducer from "./commonReducer";
import News from "./newsReducer";
import NewsDetails from "./newsDetailsReducer";
import NewsCategories from "./newsCategories";

const rootReducer = combineReducers({
  Feedlist: Feed,
  commonReducer:CommonReducer,
  News: News,
  NewsDetails: NewsDetails,
  NewsCategories: NewsCategories,
});
export default rootReducer;
