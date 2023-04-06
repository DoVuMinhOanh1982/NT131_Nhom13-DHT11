import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import Header from "../components/HeaderDetail";
import { SafeAreaView } from "react-native-safe-area-context";
import LocationCurrent from "../components/LocationCurrent";
import WeatherCurrent from "../components/WeatherCurrent";

export default function Home() {
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
        <LocationCurrent />
        <ScrollView>
          <View style={styles.body_home}>
            <WeatherCurrent />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

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
  body_home: {
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },
});
