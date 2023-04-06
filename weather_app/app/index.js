import { StyleSheet, Text, View, Dimensions } from "react-native";
import Login from "./pages/Login";
import MainContainer from "./pages/MainContainer";

export default function Page() {
  return (
    <View style={styles.container}>
      {/* <Login /> */}
      <MainContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
