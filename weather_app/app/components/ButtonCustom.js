import { StyleSheet, TouchableOpacity, Text } from "react-native";

const ButtonCustom = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text_button}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 20,
    opacity: 0.6,
  },
  text_button: {
    color: "#000000",
    fontSize: 20,
  },
});

export default ButtonCustom;
