import posts from "@/data/posts";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

const Posts = () => {
  const renderItem = ({ item }: { item: any }) => {
    return (
      <View style={styles.eachPostBlock}>
        <View style={styles.headerPosts}></View>
        <View style={styles.footerPosts}></View>
      </View>
    );
  };

  return (
    <View style={styles.postsComponent}>
      <FlatList data={posts} renderItem={renderItem} />
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  postsComponent: {
    marginTop: 20,
  },
  eachPostBlock: {},
  headerPosts: {},
  footerPosts: {},
});
