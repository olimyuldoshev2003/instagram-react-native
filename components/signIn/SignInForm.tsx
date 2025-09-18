import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import { useFormik } from "formik";
import * as Yup from "yup";

const signInForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: {
      email: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <View style={styles.signInFormComponent}>
      <View style={styles.inputBlock}>
        <TextInput
          placeholder="Email"
          placeholderTextColor={`#666666`}
          style={styles.input}
        />
      </View>
      <View style={styles.inputBlock}>
        <TextInput
          placeholder="Password"
          placeholderTextColor={`#666666`}
          style={styles.input}
        />
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default signInForm;

const styles = StyleSheet.create({
  signInFormComponent: {
    // display: `flex`,
    padding: 2,
    gap: 15,
    marginTop: 30,
  },
  inputBlock: {
  },
  input: {
    backgroundColor: `#f3f3f3`,
    padding: 2,
    borderRadius: 10,
  },
  button: {},
  buttonText: {},
});
