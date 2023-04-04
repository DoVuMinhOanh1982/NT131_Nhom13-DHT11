import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Login from "./pages/Login";
import MainContainer from "./pages/MainContainer";

export default function Page() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Login /> */}
      <MainContainer/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
