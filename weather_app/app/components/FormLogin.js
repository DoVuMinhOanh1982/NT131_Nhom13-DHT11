import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import React from "react";
import ButtonCustom from "./ButtonCustom";

export default function FormLogin() {
  const [usename, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");

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

      <ButtonCustom title={"LOGIN"} onPress={() => {}} />
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
    color: "#000000",
  },
  title_login_evening: {
    fontSize: 30,
    color: "#FFFFFF",
  },
  input: {
    height: 60,
    width: 350,
    backgroundColor: "#FFFFFF",
    opacity: 0.6,
    textAlign: "left",
    paddingLeft: 25,
    borderWidth: 0.5,
    borderRadius: 20,
    marginBottom: 25,
    borderColor: "rgba(0, 0, 0, 0.4)",
  },
});
