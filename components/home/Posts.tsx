import React, { useRef } from "react";
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Modalize } from "react-native-modalize";

// Icons
import posts from "@/data/posts";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Octicons from "@expo/vector-icons/Octicons";

const Posts = ({ onOpen }: { onOpen: any }) => {

  const renderItem = ({ item }: { item: any }) => {
    return (
      <View style={styles.eachPostBlock} key={item.id}>
        <View style={styles.headerPosts}>
          <View style={styles.imgTextBlock}>
            <Image
              source={{ uri: item.profile_img }}
              style={styles.profileImg}
            />
            <Text style={{ color: `white` }}>{item.user}</Text>
          </View>
          <Pressable onPress={onOpen}>
            <Entypo name="dots-three-horizontal" size={21} color="white" />
          </Pressable>
        </View>
        <View style={styles.postBlock}>
          <Image source={{ uri: item.post }} style={styles.postImg} />
        </View>
        <View style={styles.footerPosts}>
          <View style={styles.footerPostsBlock1}>
            <View style={styles.functionalIconsBlock}>
              <Pressable style={styles.likeButton}>
                <Feather name="heart" size={26} color="white" />
                <Text style={{ color: `white` }}>{item.likes}</Text>
              </Pressable>
              <Pressable style={styles.commentButton}>
                <AntDesign name="message" size={24} color="white" />
                <Text style={{ color: `white` }}>{item.comments.length}</Text>
              </Pressable>
              <Pressable style={styles.sendButton}>
                <FontAwesome name="send" size={24} color="white" />
                <Text style={{ color: `white` }}>{item.sentPosts}</Text>
              </Pressable>
            </View>
            <Pressable style={styles.saveButton}>
              <Octicons name="bookmark" size={29} color="white" />
            </Pressable>
          </View>
          <View style={styles.footerPostsBlock2}>
            <Text style={{ color: "white", fontSize: 16 }}>
              <Text style={{ fontWeight: "bold", marginLeft: 20 }}>
                {item.user}
              </Text>
              {"  "}
              {item.caption}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
      <SafeAreaView style={styles.container}>

        {/* Posts List */}
        <FlatList
          data={posts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          style={styles.postsComponent}
        />
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  postsComponent: {
    flex: 1,
    marginBottom: 50,
  },
  eachPostBlock: {
    marginBottom: 22,
    display: "flex",
    gap: 20,
  },
  headerPosts: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  imgTextBlock: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  profileImg: {
    width: 30,
    height: 30,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: "red",
  },
  postBlock: {
    width: "100%",
    height: 440,
    margin: 0,
    padding: 0,
  },
  postImg: {
    width: "100%",
    height: "100%",
  },
  footerPosts: {
    paddingHorizontal: 15,
  },
  footerPostsBlock1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  functionalIconsBlock: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  likeButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  commentButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  sendButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  saveButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  footerPostsBlock2: {
    marginTop: 2,
  },
  // Modalize styles
  modal: {
    backgroundColor: "#1c1c1c",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
    marginTop: StatusBar.currentHeight || 0,
  },
  modalContent: {
    padding: 20,
    paddingBottom: 30,
  },
  modalOption: {
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "#333",
  },
  modalOptionText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  modalCancel: {
    marginTop: 10,
    backgroundColor: "#333",
    borderRadius: 10,
    borderBottomWidth: 0,
  },
  modalCancelText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Posts;
