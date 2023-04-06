import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ToastAndroid,
} from "react-native";
import React from "react";
import ButtonCustom from "./ButtonCustom";
import axios from "../api";
import MainContainer from "../pages/MainContainer";
import { useRouter } from "expo-router";

export default function FormLogin() {
  const [usename, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const router = useRouter();

  const login = async () => {
    try {
      const response = await axios.post("/api/login", {
        username: usename,
        password: password,
      });
      if (response.status === 200) {
        console.log("Login success");
        ToastAndroid.showWithGravity(
          "Login Successfully!",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        );
        router.push("../pages/MainContainer");
      }
    } catch (error) {
      console.log(error);
      ToastAndroid.showWithGravity(
        "Login Failed!",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
      ToastAndroid.showWithGravity(
        { error },
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
    }
  };

  return (
    <View style={styles.form_login}>
      <View style={{ paddingBottom: 30 }}>
        <Image
          style={styles.logo_app}
          source={require("../assets/logo_app.png")}
        />
        <Text
          style={
            new Date().getHours() >= 6 && new Date().getHours() <= 18
              ? styles.title_login_morning
              : styles.title_login_evening
          }
        >
          Weather App
        </Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeUsername}
        value={usename}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Password"
      />

      <ButtonCustom title={"LOGIN"} onPress={login} />
    </View>
  );
}

const styles = StyleSheet.create({
  form_login: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo_app: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  title_login_morning: {
    fontSize: 30,
    color: "#FFFFFF",
  },
  title_login_evening: {
    fontSize: 30,
    color: "#000000",
  },
  input: {
    height: 60,
    width: 350,
    backgroundColor: "#FFFFFF",
    opacity: 0.8,
    textAlign: "left",
    paddingLeft: 25,
    borderWidth: 0.5,
    borderRadius: 20,
    marginBottom: 25,
    borderColor: "rgba(0, 0, 0, 0.4)",
  },
});
