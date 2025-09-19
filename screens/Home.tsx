import Header from "@/components/home/Header";
import Posts from "@/components/home/Posts";
import Stories from "@/components/home/Stories";
import React from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";

const Home = () => {
  // Create combined data for the FlatList
  const feedData = [
    { id: "header", type: "header" },
    { id: "stories", type: "stories" },
    { id: "posts", type: "posts" },
  ];

  const renderItem = ({ item }: { item: any }) => {
    switch (item.type) {
      case "header":
        return <Header />;
      case "stories":
        return <Stories />;
      case "posts":
        return <Posts />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.homeComponent}>
      <FlatList
        data={feedData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeComponent: {
    backgroundColor: "#000000",
    flex: 1,
  },
});
