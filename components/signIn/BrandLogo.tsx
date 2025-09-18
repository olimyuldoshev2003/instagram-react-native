import React from "react";
import { Image, StyleSheet, View } from "react-native";

const BrandLogo = () => {
  return (
    <View style={styles.brandComponent}>
      <Image
        source={require(`../../assets/instagram-images/logo-instagram.png`)}
        style={styles.logoImg}
      />
    </View>
  );
};

export default BrandLogo;

const styles = StyleSheet.create({
  brandComponent: {
    display: "flex",
    justifyContent: `center`,
    alignItems: `center`,
  },
  logoImg: {
    width: 60,
    height: 60,
  },
});
