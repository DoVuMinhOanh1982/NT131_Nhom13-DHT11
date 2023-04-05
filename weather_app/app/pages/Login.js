import { View, Text, StyleSheet, Image } from "react-native";
import FormLogin from "../components/FormLogin";

export default function Login() {
  return (
    <View style={styles.login}>
      <Image
        style={styles.background_image}
        source={
          new Date().getHours() >= 6 && new Date().getHours() <= 18
            ? require("../assets/background_morning.png")
            : require("../assets/background_evening.png")
        }
      />
      <FormLogin />
    </View>
  );
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background_image: {
    position: "absolute",
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
