import posts from "@/data/posts";
import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  // ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

// Icons
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Octicons from "@expo/vector-icons/Octicons";

const Posts = () => {
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
          <Pressable>
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
              {/* Add this space between the two Text components */}
              {item.caption}
            </Text>
          </View>
          <View style={styles.footerPostsBlock3}></View>
          <View style={styles.footerPostsBlock4}></View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.postsComponent}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
      />
    </View>
  );
};

{
  /* <ScrollView>
  {posts.map((item: any) => {
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
          <Pressable>
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
              {/* Add this space between the two Text components */
}
// {item.caption}
//       </Text>
//     </View>
//     <View style={styles.footerPostsBlock3}></View>
//     <View style={styles.footerPostsBlock4}></View>
//   </View>
// </View>
// );
// })}
// </ScrollView>;

export default Posts;

const styles = StyleSheet.create({
  postsComponent: {
    marginBottom: 260,
  },
  eachPostBlock: {
    marginBottom: 22,
    display: `flex`,
    gap: 20,
  },
  headerPosts: {
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `space-between`,
    alignItems: `center`,
  },
  imgTextBlock: {
    display: `flex`,
    flexDirection: `row`,
    alignItems: `center`,
    gap: 8,
  },
  profileImg: {
    width: 30,
    height: 30,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: `red`,
  },
  postBlock: {
    width: `100%`,
    height: 440,
    margin: 0,
    padding: 0,
  },
  postImg: {
    width: `100%`,
    height: `100%`,
  },
  footerPosts: {},
  footerPostsBlock1: {
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `space-between`,
    alignItems: `center`,
  },
  functionalIconsBlock: {
    display: `flex`,
    flexDirection: `row`,
    alignItems: `center`,
    gap: 10,
  },
  likeButton: {
    display: `flex`,
    flexDirection: `row`,
    alignItems: `center`,
    gap: 7,
  },
  commentButton: {
    display: `flex`,
    flexDirection: `row`,
    alignItems: `center`,
    gap: 7,
  },
  sendButton: {
    display: `flex`,
    flexDirection: `row`,
    alignItems: `center`,
    gap: 7,
  },
  saveButton: {
    display: `flex`,
    flexDirection: `row`,
    alignItems: `center`,
    gap: 7,
  },
  footerPostsBlock2: {
    marginTop: 2,
  },
  footerPostsBlock3: {},
  footerPostsBlock4: {},
});
