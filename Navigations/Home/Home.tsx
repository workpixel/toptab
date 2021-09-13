import React, { useEffect } from "react";
import { fetchFeed } from "../../Redux/action/fetchAction";
import {  useDispatch } from "react-redux";
import TabsNavigation from "../../components/Tabs/Tabs";

const HomeScreen = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = () => {
      dispatch(fetchFeed());
    };
    getData();
  }, []);
  
  return (
      <TabsNavigation {...props} />
  );
};

export default HomeScreen;
