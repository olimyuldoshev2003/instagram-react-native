import React from "react";
import { Image, Pressable, SafeAreaView, StyleSheet, View } from "react-native";

// Icons
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from "expo-router";

const Header = () => {
  const navigation: any = useNavigation();
  return (
    <SafeAreaView style={styles.headerHomeComponent}>
      <Pressable>
        <Image
          style={styles.homeLogoImg}
          source={require("../../assets/instagram-images/instagram-home-logo.png")}
        />
      </Pressable>
      <View style={styles.functionalityBtnsBlock}>
        <Pressable
          style={styles.btnPageNotifications}
          onPress={() => {
            navigation.navigate("Notifications");
          }}
        >
          <Feather
            name="heart"
            size={24}
            color="white"
            style={styles.textBtnPageNotifications}
          />
        </Pressable>
        <Pressable style={styles.btnPageMessages}>
          <FontAwesome5
            name="facebook-messenger"
            size={24}
            color="white"
            style={styles.textBtnPageMessages}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerHomeComponent: {
    marginTop: 25,
    paddingHorizontal: 10,
    paddingVertical: 10,
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `space-between`,
    alignItems: `center`,
  },
  homeLogoImg: {
    width: 121,
    height: 40.8,
  },
  functionalityBtnsBlock: {
    display: `flex`,
    flexDirection: `row`,
    alignItems: `center`,
    gap: 21,
  },
  btnPageNotifications: {},
  textBtnPageNotifications: {},
  btnPageMessages: {},
  textBtnPageMessages: {},
});
