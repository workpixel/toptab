import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { fetchCategories } from "../.../../../Redux/action/fetchAction";
import { fetchNews } from "../.../../../Redux/action/newsAction";
import {
  Box,
  VStack,
  Text,
  HStack,
  Divider,
  Icon,
  IconButton,
} from "native-base";
import Header from "../Header/Header";
import { NativeBaseProvider } from "native-base";
// import {
//   storeCidSuccess,
//   storeCommonTabIndex,
// } from "../../Redux/action/commonAction";
import HomeScreen from "../../Navigations/Home/Home";
import MEScreen from "../../Navigations/Home/ME";
import NewsDetails from "../../Navigations/Home/newsDetails";
import SideScreens from "./sideNavigationsScreen";
import AppBar from "../Appbar/appbar";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
function Homescreen(props) {
  return (
    <>
      <Header {...props} />
      <HomeScreen {...props} />
    </>
  );
}
function MEscreen(props) {
  return (
    <>
      <Header {...props} />
      <MEScreen {...props} />
    </>
  );
}
function SideNav(props) {
  return (
    <>
      <Header {...props} />
      <SideScreens />
    </>
  );
}
function Details(props) {
  return (
    <>
      <NewsDetails {...props} />
    </>
  );
}
// const getIcon = (screenName) => {
//   switch (screenName.name) {
//     case "Breaking News":
//       return "newspaper";
//     case "ଏମ୍ବିସି ଏକ୍ସକ୍ଲୁସିଭ୍":
//       return "newspaper-variant-multiple-outline";
//     case "Favorites":
//       return "campfire";
//     case "କ୍ରୀଡ଼ା":
//       return "car-brake-hold";
//     case "ଜୀବନଚର୍ଯ୍ୟା":
//       return "car-brake-retarder";
//     case "ନ୍ୟୁଜ୍":
//       return "car-light-high";
//     case "ଦେଶ ବିଦେଶ":
//       return "card";
//     case "ବାଣିଜ୍ୟ":
//       return "cards-diamond-outline";
//     case "ବିଜ୍ଞାନ":
//       return "cellphone-lock";
//     case "ମନୋରଞ୍ଜନ":
//       return "cellphone-settings";
//     case "ଯୋଗାଯୋଗ":
//       return "newspaper";
//     case "ରାଜନୀତି":
//       return "chart-gantt";
//     case "ସ୍ପେଶାଲ୍ ରିପୋର୍ଟ":
//       return "newspaper";
//     case "ସ୍ୱାସ୍ଥ୍ୟ":
//       return "chart-histogram";
//     default:
//       return undefined;
//   }
// };

// function CustomDrawerContent(props) {
//   const dispatch = useDispatch();
//   const { list } = props;

//   const loadComponent = (name, index) => {
//     if (name.taxonomy === list[index].taxonomy) {
//       dispatch(storeCommonTabIndex(index));
//       dispatch(storeCidSuccess(list[index].cid));
//       props.navigation.navigate(list[index].taxonomy);
//     }
//   };

//   return (
//     <DrawerContentScrollView {...props}>
//       <VStack space={6} my={2} mx={1}>
//         {list &&
//           list.length > 0 &&
//           list.map((name, index) => (
//             <VStack
//               divider={<Divider />}
//               space={4}
//               px={5}
//               py={3}
//               rounded="md"
//               key={index}
//             >
//               <TouchableOpacity onPress={(event) => loadComponent(name, index)}>
//                 <HStack space={7} alignItems="center" key={index}>
//                   <Icon
//                     color={"gray.500"}
//                     size={5}
//                     as={<MaterialCommunityIcons name={getIcon(name)} />}
//                   />
//                   <Text fontWeight={500}>{name.name}</Text>
//                 </HStack>
//               </TouchableOpacity>
//             </VStack>
//           ))}
//       </VStack>
//     </DrawerContentScrollView>
//   );
// }
function StackScreen({route: {params}}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="detailsScreen"
        component={Details}
        options={{
          headerShown: false,
        }}
        {...params}
      />
    </Stack.Navigator>
  );
}
export default function MyDrawer() {
  const dispatch = useDispatch();
  const [routeName, setRouteName] = useState("livenews");
  const list = useSelector((state) =>
    state && state.NewsCategories !== undefined
      ? state?.NewsCategories?.categoriesList
      : null
  );
  const CID = useSelector((state) =>
    state && state.CId !== undefined ? state?.CId?.cId : null
  );

  const getIcon = (screenName) => {
    switch (screenName.name) {
      case "Home":
        return "newspaper";
      case "Breaking News":
        return "newspaper";
      case "ଏମ୍ବିସି ଏକ୍ସକ୍ଲୁସିଭ୍":
        return "newspaper-variant-multiple-outline";
      case "Favorites":
        return "campfire";
      case "କ୍ରୀଡ଼ା":
        return "car-brake-hold";
      case "ଜୀବନଚର୍ଯ୍ୟା":
        return "car-brake-retarder";
      case "ନ୍ୟୁଜ୍":
        return "car-light-high";
      case "ଦେଶ ବିଦେଶ":
        return "card";
      case "ବାଣିଜ୍ୟ":
        return "cards-diamond-outline";
      case "ବିଜ୍ଞାନ":
        return "cellphone-lock";
      case "ମନୋରଞ୍ଜନ":
        return "cellphone-settings";
      case "ଯୋଗାଯୋଗ":
        return "newspaper";
      case "ରାଜନୀତି":
        return "chart-gantt";
      case "ସ୍ପେଶାଲ୍ ରିପୋର୍ଟ":
        return "newspaper";
      case "ସ୍ୱାସ୍ଥ୍ୟ":
        return "chart-histogram";
      default:
        return undefined;
    }
  };

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Box safeArea flex={1}>
          <Drawer.Navigator
            drawerContent={(props) => {
              return (
                <DrawerContentScrollView {...props}>
                  <VStack space={6} my={2} mx={1}>
                    <VStack
                      divider={<Divider />}
                      space={4}
                      px={5}
                      py={3}
                      rounded="md"
                    >
                      <TouchableOpacity
                        onPress={(event) => {
                          dispatch(fetchNews(CID));
                          // dispatch(storeCommonTabIndex(0));
                          props.navigation.navigate({
                            name: "Home",
                          });
                        }}
                      >
                        <HStack space={7} alignItems="center">
                          <Icon
                            color={"gray.500"}
                            size={5}
                            // as={<MaterialCommunityIcons name={getIcon("Home")} />}
                          />
                          <Text fontWeight={500}>Home</Text>
                        </HStack>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={(event) => {
                          dispatch(fetchNews(21));
                          // dispatch(storeCommonTabIndex(0));
                          props.navigation.navigate({
                            name: "ME",
                          });
                        }}
                      >
                        <HStack space={7} alignItems="center">
                          <Icon
                            color={"gray.500"}
                            size={5}
                          />
                          <Text fontWeight={500}>MBC Exclusive</Text>
                        </HStack>
                      </TouchableOpacity>
                    </VStack>
                  </VStack>
                </DrawerContentScrollView>
              );
            }}
          >
            <Drawer.Screen name={"Home"} component={Homescreen} />
            <Drawer.Screen name={"ME"} component={MEscreen} />
            <Drawer.Screen name="detailsScreen" component={StackScreen} />
            {list &&
              list.length > 0 &&
              list.map((ele, index) => {
                return (
                  <Drawer.Screen
                    name={ele.taxonomy}
                    component={SideNav}
                    key={index}
                  />
                );
              })}
          </Drawer.Navigator>
        </Box>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
