import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Appbar } from "react-native-paper";
import { StyleSheet } from "react-native";
export default function AppBarComponent(props) {
  const { onShare } = props;
  const navigation = useNavigation();

  const _goBack = () => {
    navigation.navigate("Home");
  };
  return (
    <Appbar.Header style={styles.container}>
      <Appbar.BackAction onPress={_goBack} style={styles.iconContentAction} />
      <Appbar.Content title="News" style={styles.contentText} />
      <Appbar.Action
        icon="share"
        onPress={onShare}
        style={styles.iconContentAction}
      />
    </Appbar.Header>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 30,
  },
  iconContentAction: {
    marginBottom: 40,
  },
  contentText: {
    marginBottom: 35,
  },
});
