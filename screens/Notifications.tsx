import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Notifications = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: `center`,
        alignItems: `center`,
        backgroundColor: `black`,
      }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: `center`, alignItems: `center` }}>
        <Text style={{ color: `white` }}>Notifications</Text>
      </ScrollView>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({});
