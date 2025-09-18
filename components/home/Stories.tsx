import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import users from "@/data/users";


const Stories = () => {
  return (
    <SafeAreaView style={styles.storiesComponent}>
      <ScrollView horizontal style={styles.storiesUsers}>
        {users.map((item) => {
          return (
            <View style={styles.eachStoryBlock}>
              <Image source={{ uri: item.img }} style={styles.storyImg} />
              <Text style={{ color: `white` }}>{item.username}</Text>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Stories;

const styles = StyleSheet.create({
  storiesComponent: {},
  storiesUsers: {
    marginTop: 10,
  },
  eachStoryBlock: {
    display: `flex`,
    // flexDirection:"column",
    justifyContent: `center`,
    alignItems: `center`,
    marginLeft: 6,
  },
  storyImg: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: `red`,
  },
});
