import React from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

// Icons
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const Header = () => {
  return (
    <SafeAreaView style={styles.headerHomeComponent}>
      <TouchableOpacity>
        <Image
          style={styles.homeLogoImg}
          source={require("../../assets/instagram-images/instagram-home-logo.png")}
        />
      </TouchableOpacity>
      <View style={styles.functionalityBtnsBlock}>
        <Pressable style={styles.btnPageNotifications}>
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
    marginTop: 10,
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
