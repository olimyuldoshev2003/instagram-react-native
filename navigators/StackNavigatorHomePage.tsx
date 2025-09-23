import Home from "@/screens/Home";
import Notifications from "@/screens/Notifications";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const StackNavigatorHomePage = () => {
  const Stack = createNativeStackNavigator();

  return (
    <GestureHandlerRootView>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </GestureHandlerRootView>
  );
};

export default StackNavigatorHomePage;

const styles = StyleSheet.create({});
