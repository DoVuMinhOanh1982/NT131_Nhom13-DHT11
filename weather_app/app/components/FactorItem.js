import React, { Component } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

const FactorItem = ({ temp, fah, humid, light, uv, wind }) => {
  return (
    <React.Fragment>
      <View style={styles.listItemView}>
        <View style={styles.ellipse}>
          <Ionicons name="ios-thermometer-outline" size={40} color="red" />
        </View>
        <View style={styles.contentView}>
          <Text style={styles.listItemText}>Nhiệt độ</Text>
          <Text style={styles.detail}>
            {temp}°C {"\t"} | {"\t"} {fah} °F
          </Text>
        </View>
      </View>

      <View style={styles.listItemView}>
        <View style={styles.ellipse}>
          <Ionicons name="water-sharp" size={40} color="blue" />
        </View>
        <View style={styles.contentView}>
          <Text style={styles.listItemText}>Độ ẩm</Text>
          <Text style={styles.detail}>
            {humid}% {"\t"} | {"\t"} Cường độ gió: {wind} km/h
          </Text>
        </View>
      </View>

      <View style={styles.listItemView}>
        <View style={styles.ellipse}>
          <Ionicons name="sunny-outline" size={40} color="yellow" />
        </View>
        <View style={styles.contentView}>
          <Text style={styles.listItemText}>Chỉ số tia UV</Text>
          <Text style={styles.detail}>
            {uv} {"\t"} | {"\t"} Cường độ ánh sáng: {light} lux
          </Text>
        </View>
      </View>

      <View style={styles.listItemView}>
        <View style={styles.ellipse}>
          <Ionicons name="ios-heart-sharp" size={40} color="#FF214C" />
        </View>
        <View style={styles.contentView}>
          <Text style={styles.listItemText}>Cảm giác như</Text>
          <Text style={styles.detail}>{parseFloat(temp + 3)}°C</Text>
        </View>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  listItemView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 5,
    marginBottom: "7%",
    borderRadius: 10,
    borderColor: "#9bedff",
    borderWidth: 1,
  },
  listItemText: {
    fontSize: 16,
    color: "#000",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 24,
    textAlign: "left",
  },
  ellipse: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9bedff",
    borderRadius: 100,
    padding: 10,
    borderColor: "#9bedff",
    borderWidth: 1,
  },
  detail: {
    fontSize: 16,
    color: "#000",
    fontStyle: "normal",
    fontWeight: "normal",
    lineHeight: 24,
    display: "flex",
    textAlign: "left",
  },
  contentView: {
    marginLeft: 10,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
});

export default FactorItem;
