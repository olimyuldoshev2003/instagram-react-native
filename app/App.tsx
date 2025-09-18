import Home from "@/screens/Home";
import SignIn from "@/screens/SignIn";
import { StatusBar, StyleSheet, View } from "react-native";

function App() {
  return (
    <View style={styles.appComponent}>
      <StatusBar hidden />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  appComponent: {
    flex: 1,
    justifyContent: `center`,
    alignItems: `center`,
  },
});

export default App;
