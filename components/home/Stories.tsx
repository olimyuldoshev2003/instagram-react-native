import users from "@/data/users";
import React, { useRef } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Carousel from "react-native-snap-carousel";

const { width: screenWidth } = Dimensions.get("window");

const MyCarousel = ({ users }: { users: any }) => {
  const carouselRef = useRef(null);

  const renderItem = ({ item }: { item: any }) => {
    return (
      <View style={styles.eachStoryBlock} key={item.id}>
        <Image source={{ uri: item.img }} style={styles.storyImg} />
        <Text style={styles.usernameText}>{item.username}</Text>
      </View>
    );
  };

  return (
    <Carousel
      ref={carouselRef}
      data={users}
      renderItem={renderItem}
      sliderWidth={screenWidth}
      itemWidth={80}
      layout="default"
      inactiveSlideScale={1}
      inactiveSlideOpacity={1}
      firstItem={0} // Start from the first item
      activeSlideAlignment={"start"} // Align to start (left)
      contentContainerCustomStyle={styles.carouselContent} // Custom styling
      enableSnap={true}
      vertical={false}
      // decelerationRate="fast"
    />
  );
};

const Stories = () => {
  return (
    <SafeAreaView style={styles.storiesComponent}>
      <ScrollView horizontal style={styles.storiesUsers}>
        {users.map((item) => {
          return (
            <View style={styles.eachStoryBlock} key={item.id}>
              <Image source={{ uri: item.img }} style={styles.storyImg} />
              <Text style={{ color: `white`, marginTop: 2 }}>
                {item.username}
              </Text>
            </View>
          );
        })}
        {/* <MyCarousel users={users} /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  storiesComponent: {
    paddingVertical: 10,
    backgroundColor: "#000",
  },
  carouselContent: {
    paddingLeft: 10, // Add left padding to start from left
  },
  eachStoryBlock: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12, // Space between items
  },
  storiesUsers: {},
  storyImg: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "red",
  },
  usernameText: {
    color: "white",
    marginTop: 4,
    fontSize: 12,
    textAlign: "center",
  },
});

export default Stories;
