import StackNavigator from "@/navigators/StackNavigator";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { useEffect } from "react";
import { StatusBar } from "react-native";

function App() {
  useEffect(() => {
    StatusBar.setHidden(true);

    // Show again when leaving the screen
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
export default App;
