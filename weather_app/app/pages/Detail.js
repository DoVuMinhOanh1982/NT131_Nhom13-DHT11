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
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonRefresh from "../components/ButtonRefresh";
import SensorData from "../components/SensorData";

const Detail = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
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
          <ButtonRefresh />
          <SensorData />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background_image: {
    position: "absolute",
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  header: {
    height: Dimensions.get("window").height / 5,
  },
});

export default Detail;
