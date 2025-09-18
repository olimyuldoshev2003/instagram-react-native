import BrandLogo from "@/components/signIn/BrandLogo";
import SignInForm from "@/components/signIn/SignInForm";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SignIn = () => {


  return (
    <View style={styles.signInComponent}>
      <View style={styles.blockSignIn}>
        {/* <Text>Sign In</Text> */}
        <BrandLogo />
        <SignInForm />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
    signInComponent: {
      marginTop: 20,
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 12,
      backgroundColor: `#fff`
  },
  blockSignIn: {},
});
