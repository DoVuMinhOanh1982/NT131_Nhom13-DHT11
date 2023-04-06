import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import HeaderDetail from "../components/HeaderDetail";
import Home from "./Home";
import CircleView from "../components/CircleView";

const Detail = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.background_image}
        source={
          new Date().getHours() >= 6 && new Date().getHours() <= 18
            ? require("../assets/background_morning.png")
            : require("../assets/home_background.png")
        }
      />
      <HeaderDetail style={styles.header} />
      <ScrollView nestedScrollEnabled={true}>
        <CircleView />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background_image: {
    position: "absolute",
    flex: 1,
    width: "100%",
    height: "100%",
  },
  header: {
    height: Dimensions.get("window").height / 5,
  },
});

export default Detail;
