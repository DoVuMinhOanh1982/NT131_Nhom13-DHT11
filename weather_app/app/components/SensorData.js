import { View, StyleSheet, Text } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import FactorItem from "./FactorItem";

export default SensorData = ({ temp, fah, humid, wind, uv, light }) => {
  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <FactorItem
          temp={temp}
          fah={fah}
          humid={humid}
          wind={wind}
          uv={uv}
          light={light}
        />
      </View>
    </View>
  );
};

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
