import { Text, View, StyleSheet, Dimensions, Image } from "react-native";
import { useEffect, useState } from "react";

const windowHeight = Dimensions.get("window").height;

const HeaderDetail = () => {
  const [greet, setGreet] = useState();
  useEffect(() => {
    findGreet();
  });

  const findGreet = () => {
    const hours = new Date().getHours();
    if (hours === 0 || hours < 12) return setGreet("buổi sáng");
    if (hours === 12 || hours < 18) return setGreet("buổi chiều");
    else return setGreet("buổi tối");
  };
  return (
    <View style={styles.greetingView}>
      <Image
        style={styles.avatar}
        source={require("../assets/avatar_user.jpeg")}
      />
      <Text style={styles.greeting}>{` Xin chào ${greet}, `}</Text>
      <Text style={styles.fullname}>Minh Oanh</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  greetingView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 0.095 * windowHeight,
    padding: 5,
  },
  avatar: {
    margin: 10,
    width: "15%",
    height: "100%",
    backgroundColor: "#000",
    borderRadius: 50,
  },
  greeting: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18,
    textAlign: "center",
    justifyContent: "flex-start",
    color: "#000000",
  },
  fullname: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 18,
    textAlign: "center",
    color: "#000000",
  },
});

export default HeaderDetail;
