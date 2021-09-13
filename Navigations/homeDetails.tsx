import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Button,
  Share,
  StyleSheet,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, Text, Box, Stack, Icon, IconButton } from "native-base";
import RBSheet from "react-native-raw-bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { Feather, SimpleLineIcons } from "@expo/vector-icons";
import Loader from "../components/Loader/loader";
import { storeCommonData } from "../Redux/action/commonAction";

const HomeDetails = (props) => {
  const refRBSheet = React.useRef();
  // const navigation = useNavigation();
  const dispatch = useDispatch();
  const news = useSelector((state) =>
    state && state.News !== undefined ? state?.News : null
  );
  const openModal = () => {
    refRBSheet.current.open();
  };

  const closeModal = () => {
    refRBSheet.current.close();
  };
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

  if (news && news?.loading && news?.loading) {
    return <Loader />;
  } else {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={{ padding: 10 }}>
            <ScrollView horizontal={true}>
              {
                news &&
                  news?.newList &&
                  news?.newList?.News &&
                  news?.newList?.News?.length > 0 &&
                  news?.newList?.News?.map((ele, index) => {
                    const imageUrl = ele.image;
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          dispatch(storeCommonData(ele));
                          props.navigation.navigate("detailsScreen", {
                            params: { news: ele },
                            itemId: 86,
                          });
                        }}
                        key={index}
                      >
                        <Box
                          bg="white"
                          shadow={3}
                          rounded="lg"
                          maxWidth="100%"
                          style={{ marginHorizontal: 5 }}
                          key={index}
                        >
                          <Image
                            source={{
                              uri: imageUrl,
                            }}
                            alt="image base"
                            resizeMode="cover"
                            height={150}
                            roundedTop="md"
                          />
                          <Text
                            bold
                            position="absolute"
                            color="white"
                            top={0}
                            m={[4, 4, 8]}
                          >
                            NEWS
                          </Text>
                          <Stack
                            space={4}
                            p={[4, 4, 8]}
                            style={{ backgroundColor: "#990317" }}
                          >
                            <Text
                              lineHeight={[5, 5, 7]}
                              noOfLines={[4, 4, 2]}
                              style={{ color: "#fff" }}
                            >
                              {ele.title.slice(0, 80)}
                            </Text>
                          </Stack>
                        </Box>
                      </TouchableOpacity>
                    );
                  })
                // )
              }
            </ScrollView>
          </View>
          <View style={{ marginVertical: 1, marginHorizontal: 10 }}>
            {news &&
              news?.newList &&
              news?.newList?.News &&
              news?.newList?.News?.length > 0 &&
              news?.newList?.News?.map((newsName, index) => {
                const imageUrl = newsName.image;
                return (
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(storeCommonData(newsName));
                      props.navigation.navigate("detailsScreen", {
                        params: { news: newsName },
                        itemId: 86,
                      });
                    }}
                    key={index}
                  >
                    <Box
                      bg="white"
                      shadow={3}
                      rounded="lg"
                      maxWidth="100%"
                      style={{ marginBottom: 5 }}
                      key={index}
                    >
                      <View
                        style={{
                          justifyContent: "space-between",
                          flexDirection: "row",
                          padding: 10,
                        }}
                      >
                        <View>
                          <Image
                            source={{
                              uri: imageUrl,
                            }}
                            alt="image base"
                            resizeMode="cover"
                            height={110}
                            width={150}
                          />
                        </View>
                        <View>
                          <Stack space={4} p={[4, 4, 8]}>
                            <View style={{ width: 120 }}>
                              <Text
                                lineHeight={[5, 5, 7]}
                                noOfLines={[4, 4, 2]}
                                style={{ fontSize: 16, color: "#919699" }}
                              >
                                {newsName.title
                                  .replace(/(\r\n|\n|\r)/gm, "")
                                  .slice(0, 80)}
                              </Text>
                            </View>
                          </Stack>
                        </View>
                        <TouchableOpacity onPress={openModal}>
                          <Feather
                            name="more-vertical"
                            size={24}
                            color="black"
                          />
                        </TouchableOpacity>
                        <RBSheet
                          ref={refRBSheet}
                          closeOnDragDown={true}
                          closeOnPressMask={true}
                          customStyles={{
                            wrapper: {
                              backgroundColor: "transparent",
                            },
                            draggableIcon: {
                              backgroundColor: "red",
                            },
                          }}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              padding: 20,
                              flexDirection: "row",
                            }}
                          >
                            <View>
                              <SimpleLineIcons
                                name="share"
                                size={24}
                                color="red"
                              />
                            </View>
                            <View style={{ marginLeft: 20 }}>
                              <Text onPress={() => onShare(newsName.url)}>
                                Share this story
                              </Text>
                            </View>
                          </View>
                          <View style={styles.containerMain}>
                            <IconButton
                              variant="solid"
                              style={styles.bottomView}
                              onPress={closeModal}
                              icon={
                                <Icon
                                  size="md"
                                  as={
                                    <MaterialCommunityIcons name="close-circle" />
                                  }
                                  color="#5B5B5B"
                                />
                              }
                            />
                          </View>
                        </RBSheet>
                      </View>
                    </Box>
                  </TouchableOpacity>
                );
              })}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomView: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute", 
  },
 
});

export default HomeDetails;
