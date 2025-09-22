import Home from "@/screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image, StyleSheet } from "react-native";

// Icons
import { Ionicons, MaterialIcons, Octicons } from "@expo/vector-icons";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: `#fff`,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: `#000`,
        },
        tabBarActiveBackgroundColor: `#000`,
      }}
    >
      {/* <Tab.Screen name="SignIn" component={SignIn} options={{}} /> */}
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon({ color, size }) {
            return <Octicons name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Home}
        options={{
          tabBarIcon({ color, size }) {
            return <MaterialIcons name="explore" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Add"
        component={Home}
        options={{
          tabBarIcon({ color, size }) {
            return <Ionicons name="add" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Reels"
        component={Home}
        options={{
          tabBarIcon({ color, size }) {
            return (
              <MaterialIcons
                name="video-collection"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        
        options={{
          tabBarIcon({ color, size }) {
            return (
              <Image
                source={require("../assets/instagram-images/my_profile.jpg")}
                style={styles.imgProfile}
              />
            );
          },
          
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  imgProfile: {
    width: 30,
    height: 30,
    borderRadius: 35,
  },
});
