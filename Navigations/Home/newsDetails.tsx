import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Share,
} from "react-native";
import { useSelector } from "react-redux";
import moment from "moment";
import { Image, Box, Stack, Icon } from "native-base";
import { flexDirection, fontSize } from "styled-system";
import AppBarComponent from "../../components/Appbar/appbar";
import Loader from "../../components/Loader/loader";

const SingleHomeDetails = () => {
  const news = useSelector((state) =>
    state && state.commonReducer !== undefined ? state?.commonReducer : null
  );

  const onShare = async (post_content) => {
    try {
      const result = await Share.share({
        message: post_content,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const { image, title, post_date, post_content, url } = news.selectedData;
  if (news && news?.loading && news?.loading) {
    return <Loader />;
  } else {
    return (
      <View>
        <View>
          <AppBarComponent onShare={() => onShare(url)} />
        </View>
        <ScrollView>
          <View style={styles.container}>
            <Box
              bg="white"
              shadow={3}
              rounded="lg"
              maxWidth="100%"
              style={{ marginHorizontal: 5 }}
            >
              <View style={{ padding: 20 }}>
                <Image
                  source={{ uri: image }}
                  alt="image base"
                  resizeMode="cover"
                  height={150}
                  roundedTop="md"
                />
              </View>
              <View>
                <Text style={styles.textTitle}>{title}</Text>
              </View>
              <View style={styles.dateContainer}>
                <Text style={styles.postDate}>Updated: </Text>
                <Text style={styles.postDate}>
                  {moment(post_date).format("lll")} | Edited By: Pti
                </Text>
              </View>
              <Box
                bg="white"
                shadow={3}
                rounded="lg"
                maxWidth="100%"
                style={{ marginHorizontal: 5 }}
              >
                <View style={styles.postContent}>
                  <Text style={styles.postText}>{post_content}</Text>
                </View>
              </Box>
            </Box>
          </View>
        </ScrollView>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 1,
  },
  textTitle: {
    fontSize: 20,
    color: "#000",
    marginLeft: 20,
    marginRight: 20,
    textAlign: "justify",
  },
  dateContainer: {
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  postDate: {
    fontSize: 15,
    color: "#5B5B5B",
  },
  postContent: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 100,
  },
  postText: {
    textAlign: "justify",
    fontSize: 15,
    color: "#5B5B5B",
    justifyContent: "center",
  },
});
export default SingleHomeDetails;
