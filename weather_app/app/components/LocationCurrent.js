import React, { useState, useEffect } from "react";
import { Platform, Text, View, StyleSheet } from "react-native";

import * as Location from "expo-location";

export default function LocationCurrent() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View>
      {/* <Text>{text}</Text> */}
      <Text style={styles.location}>TP Ho Chi Minh</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  location: {
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
    width: "100%",
    fontSize: 26,
    alignItems: "center",
    color: "#000000",
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 30,
  },
});
