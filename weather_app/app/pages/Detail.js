import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Dimensions,
  ToastAndroid,
} from "react-native";
import HeaderDetail from "../components/HeaderDetail";
import Home from "./Home";
import axios from "../api";
import CircleView from "../components/CircleView";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonRefresh from "../components/ButtonRefresh";
import SensorData from "../components/SensorData";
import CardCustom from "../components/CardCustom";
import { useState } from "react";

const Detail = () => {
  const [tempratureData, setTemperatureData] = useState({
    temp: 0,
    fah: 0,
    comment: null,
    suggest: null,
    warning: null,
  });

  const getSensorTemprature = async () => {
    try {
      const { data } = await axios.get("/api/view/temperature", {});
      if (data.success) {
        setTemperatureData({
          temp: data.info.temp[0].celcius,
          fah: data.info.fahrenheit[0].fahrenheit,
          comment: data.info.comment[0].comment,
          suggest: data.info.suggest[0].suggest,
          warning: data.info.warning[0].warning,
        });
        ToastAndroid.showWithGravity(
          "Get Info Successfully!",
          ToastAndroid.SHORT,
          ToastAndroid.TOP
        );
      }
    } catch (e) {
      console.error(e);
      ToastAndroid.showWithGravity(
        "Get Info Failed!",
        ToastAndroid.SHORT,
        ToastAndroid.TOP
      );
    }
  };

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
        <HeaderDetail style={styles.header} />
        <ScrollView nestedScrollEnabled={true}>
          <CircleView temp={tempratureData?.temp} />
          <ButtonRefresh />
          <SensorData
            temp={30}
            fah={30}
            humid={30}
            wind={30}
            uv={30}
            light={30}
          />
          <CardCustom />
          <View style={{ height: 70 }}></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

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
  header: {
    height: Dimensions.get("window").height / 5,
  },
});

export default Detail;
