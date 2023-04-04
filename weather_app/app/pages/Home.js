import { View, Text, StyleSheet, Image } from "react-native";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.home_page}>
        <Image
          style={styles.background_image}
          source={
            new Date().getHours() >= 6 && new Date().getHours() <= 18
              ? require("../assets/background_morning.png")
              : require("../assets/background_evening.png")
          }
        />
        <View style={styles.body_home}>
          <Header />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  home_page: {
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
