import Header from "@/components/home/Header";
import Posts from "@/components/home/Posts";
import Stories from "@/components/home/Stories";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

const Home = () => {
  return (
    <SafeAreaView style={styles.homeComponent}>
      <Header />
      <Stories />
      <Posts/>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeComponent: {
    backgroundColor: `#000000`,
    width: `100%`,
    height: `100%`,
  },
  header: {},
  posts: {},
});
