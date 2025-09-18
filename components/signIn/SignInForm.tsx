import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import { useFormik } from "formik";
import * as Yup from "yup";

const signInForm = () => {
  const formik: any = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),
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
          textContentType="emailAddress"
          value={formik.values.email}
          onChangeText={formik.handleChange("email")}
          onBlur={formik.handleBlur("email")}
          autoFocus
          autoCapitalize="none"
        />
        {formik.touched.email && formik.errors.email ? (
          <Text style={{ color: `red`, marginTop: 5 }}>
            {formik.errors.email}
          </Text>
        ) : null}
      </View>

      <View style={styles.inputBlock}>
        <TextInput
          placeholder="Password"
          placeholderTextColor={`#666666`}
          style={styles.input}
          textContentType="password"
          autoCorrect={false}
          secureTextEntry
          value={formik.values.password}
          onChangeText={formik.handleChange("password")}
          onBlur={formik.handleBlur("password")}
        />
        {formik.touched.password && formik.errors.password ? (
          <Text style={{ color: `red`, marginTop: 5 }}>
            {formik.errors.password}
          </Text>
        ) : null}
      </View>
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
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
    width: 380,
  },
  input: {
    backgroundColor: `#f3f3f3`,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: `#00a2ff`,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: `center`,
    color: `#fff`,
    fontSize: 15,
  },
});
