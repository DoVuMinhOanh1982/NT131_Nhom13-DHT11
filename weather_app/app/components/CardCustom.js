import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

const CardCustom = ({ temp, humid, uv }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lưu ý khi ra ngoài</Text>
      <Image
        style={styles.image}
        source={require("../assets/avatar_user.jpeg")}
      />
      <Text style={styles.content}>CardCustom</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cce3ff",
    width: Dimensions.get("window").width - 30,
    marginLeft: 15,
    borderRadius: 10,
    opacity: 0.8,
    shadowColor: "#a29bef",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 30,
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  image: {
    height: 150,
    width: Dimensions.get("window").width - 30,
    borderRadius: 5,
    alignContent: "center",
    alignSelf: "center",
  },
  content: {
    fontSize: 16,
    margin: 10,
  },
});
export default CardCustom;
