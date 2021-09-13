import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { Tabs, TabScreen } from "react-native-paper-tabs";
import { useSelector, useDispatch } from "react-redux";
import HomeDetails from "../../Navigations/homeDetails";
import { fetchCategories } from "../.../../../Redux/action/fetchAction";
import { fetchNews } from "../../Redux/action/newsAction";
import { storeCidSuccess } from "../../Redux/action/commonAction";

export default function TabsNavigation(props) {
  const dispatch = useDispatch();
  const [tabIndex, setTabIndex] = useState(0);
  const newCat = useSelector((state) =>
    state && state.NewsCategories !== undefined ? state?.NewsCategories : null
  );
  useEffect(() => {
    const getCat = () => {
      dispatch(fetchCategories());
    };
    getCat();
  }, []);

  const getCid = (index) => {
    const cid =
      newCat && newCat.categoriesList && newCat.categoriesList[index].cid;
    dispatch(fetchNews(cid));
    dispatch(storeCidSuccess(cid));
    setTabIndex(index);
  };
  return (
    <>
      {newCat && newCat.categoriesList && newCat.categoriesList.length > 0 && (
        <Tabs
          mode="scrollable"
          // defaultIndex={tabIndex}
          showLeadingSpace={false}
          // style={{ flexDirection: "row" }}
          onChangeIndex={(newIndex) => getCid(newIndex)}
        >
          {newCat &&
            newCat.categoriesList !== undefined &&
            newCat.categoriesList.length > 0 &&
            newCat.categoriesList.map((catName, index) => {
              return (
                <TabScreen label={catName.taxonomy} key={index}>
                  <HomeDetails {...props} key={index} />
                </TabScreen>
              );
            })}
        </Tabs>
      )}
    </>
  );
}
