import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
} from "react-native";
import ButtonCustom from "./ButtonCustom";

const ButtonRefresh = ({ onPress }) => {
  return (
    <View style={styles.button}>
      <ButtonCustom title={"Refresh"} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 12,
  },
});

export default ButtonRefresh;
