import { View, StyleSheet, Text } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import FactorItem from "./FactorItem";

export default function SensorData() {
  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <FactorItem
          temp={30}
          fah={30}
          humid={30}
          wind={30}
          uv={30}
          light={30}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  square: {
    marginTop: 20,
    fontWeight: "600",
    fontSize: 22,
    lineHeight: 30,
  },
});
