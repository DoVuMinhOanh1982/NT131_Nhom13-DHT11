import { View, Text, StyleSheet } from "react-native";
import { API_KEY } from "../utils/WeatherAPIKey";
import React, { useState, useEffect } from "react";
import FactorItem from "./FactorItem";

export default function WeatherCurrent() {
  const [data, setData] = useState({
    time: null,
    temp_c: 0,
    temp_f: 0,
    humid: 0,
    feel: 0,
    status: null,
    wind: 0,
    uv: 0,
    light: 0,
  });

  const [future, setFutureNext4Hour] = useState({
    time: null,
    temp: 0,
    humid: 0,
    avail_rain: 0,
  });

  useEffect(() => {
    fetchWeather();
    const timeOutId = setTimeout(() => fetchWeather(), 60000);

    return () => clearTimeout(timeOutId);
  }, []);

  const fetchWeather = () => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=Hanoi&days=1&aqi=yes&alerts=yes`
    )
      .then((res) => res.json())
      .then((data) => {
        setData({
          time: data.forecast.forecastday[0].date,
          temp_c: data.forecast.forecastday[0].day.avgtemp_c,
          temp_f: data.forecast.forecastday[0].day.avgtemp_f,
          humid: data.forecast.forecastday[0].day.avghumidity,
          feel: data.current.feelslike_c,
          status: data.forecast.forecastday[0].day.condition.text,
          wind: data.forecast.forecastday[0].day.maxwind_kph,
          uv: data.forecast.forecastday[0].day.uv,
          light: data.forecast.forecastday[0].day.avgvis_km,
        });
        var index = new Date().getHours() + 4;
        setFutureNext4Hour({
          time: data.forecast.forecastday[0].hour[index].time,
          temp: data.forecast.forecastday[0].hour[index].temp_c,
          humid: data.forecast.forecastday[0].hour[index].humidity,
          avail_rain: data.forecast.forecastday[0].hour[index].chance_of_rain,
        });
        console.log(data);
      });
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>{data?.time}</Text> */}
      <Text style={styles.temp_c}>{data?.temp_c}°C</Text>

      <View style={styles.square}>
        <FactorItem
          temp={data?.temp_c}
          fah={data?.temp_f}
          humid={data?.humid}
          wind={data?.wind}
          uv={data?.uv}
          light={data?.light}
        />
      </View>

      <View style={{ width: "100%" }}>
        <Text style={styles.header_square}>Dự báo thời tiết 4 giờ tới</Text>
        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            borderColor: "#9bedff",
          }}
        >
          <Text style={styles.content}>Vào lúc</Text>
          <Text style={styles.ratio}>{future?.time}</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            borderColor: "#9bedff",
          }}
        >
          <Text style={styles.content}>Nhiệt độ</Text>
          <Text style={styles.ratio}>{future?.temp}°C</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            borderColor: "#9bedff",
          }}
        >
          <Text style={styles.content}>Độ ẩm</Text>
          <Text style={styles.ratio}>{future?.humid}%</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            borderColor: "#9bedff",
          }}
        >
          <Text style={styles.content}>Khả năng mưa</Text>
          <Text style={styles.ratio}>{future?.avail_rain}%</Text>
        </View>
        <Text style={styles.content}> </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  title: {
    width: "100%",
    fontSize: 20,
  },
  temp_c: {
    marginTop: "10%",
    marginBottom: "10%",
    fontSize: 70,
    justifyContent: "flex-start",
    color: "#000",
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 72,
    textTransform: "uppercase",
  },
  status: {
    marginTop: "5%",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 23,
    lineHeight: 35,
  },
  header_square: {
    marginTop: 20,
    fontWeight: "600",
    fontSize: 22,
    lineHeight: 30,
  },
  content: {
    marginTop: "5%",
    fontWeight: "400",
    width: "60%",
    fontSize: 16,
    lineHeight: 25,
    textAlign: "left",
  },
  ratio: {
    marginTop: "5%",
    fontWeight: "400",
    width: "40%",
    fontSize: 16,
    lineHeight: 25,
    textAlign: "right",
  },
});
