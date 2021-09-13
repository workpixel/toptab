import "react-native-gesture-handler";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { Provider } from "react-redux";
import { createStore } from "redux";
import MyDrawer from "./components/Drawer/Drawer";
import Store from "./Redux//reducer/store";
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
            <Provider store={Store}>
              <MyDrawer />
            </Provider>
      </SafeAreaProvider>
    );
  }
}
