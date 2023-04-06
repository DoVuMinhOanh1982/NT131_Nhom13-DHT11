import { View, StyleSheet } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";

export default function CircleView() {
  return (
    <View style={styles.progressCircleView}>
      <CircularProgress
        value={20}
        maxValue={40}
        valueSuffix={"°C"}
        progressValueStyle={{ fontSize: 42, fontWeight: "700" }}
        titleColor={"#424B5A"}
        radius={110}
        progressValueColor={"#424B5A"}
        inActiveStrokeOpacity={0.5}
        inActiveStrokeWidth={30}
        activeStrokeWidth={25}
        activeStrokeColor={"#424B5A"}
        activeStrokeSecondaryColor={"#990000"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  progressCircleView: {
    marginTop: 10,
    marginBottom: 15,
    width: "100%",
    height: 220,
    justifyContent: "center",
    alignItems: "center",
  },
});
