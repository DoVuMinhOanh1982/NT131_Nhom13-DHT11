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
import axios from "../api/index";
import CircleView from "../components/CircleView";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonRefresh from "../components/ButtonRefresh";
import SensorData from "../components/SensorData";
import CardCustom from "../components/CardCustom";
import { useState, useEffect } from "react";

const Detail = () => {
  const [tempratureData, setTemperatureData] = useState({
    cel: 0,
    fah: 0,
    comment: null,
    suggest: null,
    warning: null,
  });
  const [lightData, setLightData] = useState({
    light: 0,
    uv: 0,
    windDensity: 0,
    suggest: null,
    warning: null,
  });
  const [humidityData, setHumidityData] = useState({
    humidity: 0,
    suggest: null,
    warning: null,
  });

  const getSensorTemprature = async () => {
    try {
      const response = await axios.get("/api/view/temperature", {});
      setTemperatureData({
        cel: response.data.celcius,
        fah: response.data.fahrenheit,
        comment: response.data.comment,
        suggest: response.data.suggest,
        warning: response.data.warning,
      });
      ToastAndroid.showWithGravity(
        "Get Info Successfully!",
        ToastAndroid.SHORT,
        ToastAndroid.TOP
      );
    } catch (e) {
      console.error(e);
      ToastAndroid.showWithGravity(
        "Get Info Failed!",
        ToastAndroid.SHORT,
        ToastAndroid.TOP
      );
    }
  };

  const getLightData = async () => {
    try {
      const responseLight = await axios.get("/api/view/light", {});
      setLightData({
        light: responseLight.data.light,
        uv: responseLight.data.uv,
        windDensity: responseLight.data.windDensity,
        suggest: responseLight.data.suggest,
        warning: responseLight.data.warning,
      });
      ToastAndroid.showWithGravity(
        "Get Info Successfully!",
        ToastAndroid.SHORT,
        ToastAndroid.TOP
      );
    } catch (e) {
      console.error(e);
      ToastAndroid.showWithGravity(
        "Get Info Failed!",
        ToastAndroid.SHORT,
        ToastAndroid.TOP
      );
    }
  };

  const getHumidityData = async () => {
    try {
      const responseHumidity = await axios.get("/api/view/humidity", {});
      setHumidityData({
        humidity: responseHumidity.data.humidity,
        suggest: responseHumidity.data.suggest,
        warning: responseHumidity.data.warning,
      });
      ToastAndroid.showWithGravity(
        "Get Info Successfully!",
        ToastAndroid.SHORT,
        ToastAndroid.TOP
      );
    } catch (e) {
      console.error(e);
      ToastAndroid.showWithGravity(
        "Get Info Failed!",
        ToastAndroid.SHORT,
        ToastAndroid.TOP
      );
    }
  };

  useEffect(() => {
    getSensorTemprature();
    getLightData();
    getHumidityData();
  }, []);

  const handleRefresh = () => {
    getSensorTemprature();
    getLightData();
    getHumidityData();
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
          <CircleView temp={tempratureData?.cel} />
          <ButtonRefresh onPress={handleRefresh} />
          <SensorData
            temp={tempratureData?.cel}
            fah={tempratureData?.fah}
            humid={humidityData?.humidity}
            wind={lightData?.windDensity}
            uv={lightData?.uv}
            light={lightData?.light}
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
