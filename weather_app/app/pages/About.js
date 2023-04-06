import { View, Text, StyleSheet, Image } from "react-native";
import Header from "../components/HeaderDetail";
import { SafeAreaView } from "react-native-safe-area-context";

export default function About() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.background_image}
        source={
          new Date().getHours() >= 6 && new Date().getHours() <= 18
            ? require("../assets/background_morning.png")
            : require("../assets/about_background.png")
        }
      />
      <View style={styles.body_about}>
        <Text style={styles.title}>CREDITS</Text>
        <View style={styles.contentView}>
          <Text style={styles.childTitle}>Contributors</Text>
          <Text style={styles.content}>20521986 - Le Thi Anh Thu</Text>
          <Text style={styles.content}>19521982 - Do Thi Minh Oanh</Text>
        </View>

        <View style={styles.contentView}>
          <Text style={styles.childTitle}>Dispatched as</Text>
          <Text style={styles.content}>Khoa Mang may tinh & Truyen thong</Text>
          <Text style={styles.content}>NT131.N21 - Do an He thong Nhung</Text>
          <Text style={styles.content}>HK2 2022-2023</Text>
          <Text style={styles.content}>GVHD: Le Anh Tuan</Text>
        </View>

        <View style={styles.contentView}>
          <Text style={styles.childTitle}>Core Technologies</Text>
          <Text style={styles.content}>React Native</Text>
          <Text style={styles.content}>Java - Spring Boot</Text>
          <Text style={styles.content}>PostgreSQL</Text>
        </View>

        <View style={styles.contentView}>
          <Text style={styles.childTitle}>Feedback</Text>
          <Text style={styles.content}>19521982@gm.uit.edu.vn</Text>
        </View>
      </View>
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
  body_about: {
    marginTop: "12%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 27,
    lineHeight: 30,
  },
  contentView: {
    marginTop: "10%",
    flexDirection: "column",
    alignItems: "center",
  },
  childTitle: {
    height: 25,
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 24,
  },
  content: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
    lineHeight: 24,
  },
});
