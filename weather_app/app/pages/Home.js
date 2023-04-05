import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import LocationCurrent from "../components/LocationCurrent";
import WeatherCurrent from "../components/WeatherCurrent";

export default function Home() {
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
      <ScrollView>
        <View style={styles.body_home}>
          <LocationCurrent />
          <WeatherCurrent />
        </View>
      </ScrollView>
    </View>
  );
}

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
  body_home: {
    margin: 20,
  },
});
