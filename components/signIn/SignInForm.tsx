import { useNavigation } from "expo-router";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import * as Yup from "yup";

const SignInForm = () => {
  const navigation: any = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik: any = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email is required")
        .email("Please enter a valid email address")
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          "Invalid email format"
        )
        .max(100, "Email must be less than 100 characters")
        .test(
          "no-disposable-email",
          "Disposable email addresses are not allowed",
          (value) => {
            const disposableDomains = [
              "tempmail",
              "fake",
              "trash",
              "guerrillamail",
              "mailinator",
              "disposable",
              "throwaway",
            ];
            return !disposableDomains.some((domain) =>
              value.toLowerCase().includes(domain)
            );
          }
        ),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .max(50, "Password must be less than 50 characters")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[0-9]/, "Password must contain at least one number")
        .matches(
          /[!@#$%^&*(),.?":{}|<>]/,
          "Password must contain at least one special character"
        )
        .test(
          "no-common-passwords",
          "This password is too common. Please choose a stronger one",
          (value) => {
            const commonPasswords = [
              "password",
              "12345678",
              "qwertyui",
              "letmein",
              "welcome",
              "admin123",
              "password1",
            ];
            return !commonPasswords.includes(value.toLowerCase());
          }
        )
        .test(
          "no-personal-info",
          "Password should not contain your email or name",
          (value, context) => {
            const email = context.parent.email.toLowerCase();
            return !value.toLowerCase().includes(email.split("@")[0]);
          }
        ),
    }),
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      if (loginAttempts >= 5) {
        setFieldError(
          "password",
          "Too many failed attempts. Please try again later."
        );
        setSubmitting(false);
        return;
      }

      setIsSubmitting(true);

      try {
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Here you would typically make an actual API call
        // For demo purposes, we'll simulate a successful login
        if (
          values.email === "o39@gmail.com" &&
          values.password === "Olim2003$"
        ) {
          navigation.replace("Application");
        } else {
          setLoginAttempts((prev) => prev + 1);
          setFieldError("password", "Invalid email or password");
        }
      } catch (error) {
        setFieldError("password", "Network error. Please try again.");
      } finally {
        setIsSubmitting(false);
        setSubmitting(false);
      }
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.signInFormComponent}>
      <View style={styles.inputBlock}>
        <TextInput
          placeholder="Email"
          placeholderTextColor={`#666666`}
          style={[
            styles.input,
            formik.touched.email && formik.errors.email && styles.inputError,
            formik.touched.email && !formik.errors.email && styles.inputSuccess,
          ]}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoComplete="email"
          value={formik.values.email}
          onChangeText={formik.handleChange("email")}
          onBlur={formik.handleBlur("email")}
          autoFocus
          autoCapitalize="none"
          editable={!isSubmitting}
        />
        {formik.touched.email && formik.errors.email ? (
          <Text style={styles.errorText}>{formik.errors.email}</Text>
        ) : null}
        {formik.touched.email && !formik.errors.email ? (
          <Text style={styles.successText}>✓ Valid email</Text>
        ) : null}
      </View>

      <View style={styles.inputBlock}>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
            placeholderTextColor={`#666666`}
            style={[
              styles.input,
              styles.passwordInput,
              formik.touched.password &&
                formik.errors.password &&
                styles.inputError,
              formik.touched.password &&
                !formik.errors.password &&
                styles.inputSuccess,
            ]}
            textContentType="password"
            autoComplete="password"
            autoCorrect={false}
            secureTextEntry={!showPassword}
            value={formik.values.password}
            onChangeText={formik.handleChange("password")}
            onBlur={formik.handleBlur("password")}
            editable={!isSubmitting}
          />
          <Pressable
            style={styles.showPasswordButton}
            onPress={togglePasswordVisibility}
          >
            <Text style={styles.showPasswordText}>
              {showPassword ? "Hide" : "Show"}
            </Text>
          </Pressable>
        </View>

        {formik.touched.password && formik.errors.password ? (
          <Text style={styles.errorText}>{formik.errors.password}</Text>
        ) : null}

        {formik.touched.password && !formik.errors.password ? (
          <Text style={styles.successText}>✓ Strong password</Text>
        ) : null}

        {/* Password strength indicator */}
        {formik.values.password && !formik.errors.password && (
          <View style={styles.passwordStrength}>
            <View style={[styles.strengthBar, styles.strengthStrong]} />
            <Text style={styles.strengthText}>Strong password</Text>
          </View>
        )}
      </View>

      <Pressable
        style={[
          styles.button,
          (isSubmitting || !formik.isValid) && styles.buttonDisabled,
        ]}
        onPress={formik.handleSubmit}
        disabled={isSubmitting || !formik.isValid}
      >
        <Text style={styles.buttonText}>
          {isSubmitting ? "Signing In..." : "Sign In"}
        </Text>
      </Pressable>

      {loginAttempts > 0 && (
        <Text style={styles.attemptsText}>Attempts: {loginAttempts}/5</Text>
      )}
    </View>
  );
};

export default SignInForm;

const styles = StyleSheet.create({
  signInFormComponent: {
    padding: 2,
    gap: 20,
    marginTop: 30,
  },
  inputBlock: {
    width: 365,
  },
  input: {
    backgroundColor: `#f8f9fa`,
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: `#e9ecef`,
    fontSize: 16,
  },
  inputError: {
    borderColor: `#dc3545`,
    backgroundColor: `#fff5f5`,
  },
  inputSuccess: {
    borderColor: `#28a745`,
    backgroundColor: `#f8fff9`,
  },
  passwordContainer: {
    flexDirection: `row`,
    alignItems: `center`,
  },
  passwordInput: {
    flex: 1,
  },
  showPasswordButton: {
    position: `absolute`,
    right: 15,
    padding: 5,
  },
  showPasswordText: {
    color: `#007bff`,
    fontSize: 14,
    fontWeight: `500`,
  },
  button: {
    backgroundColor: `#007bff`,
    paddingVertical: 15,
    borderRadius: 12,
    marginTop: 10,
  },
  buttonDisabled: {
    backgroundColor: `#6c757d`,
    opacity: 0.7,
  },
  buttonText: {
    textAlign: `center`,
    color: `#fff`,
    fontSize: 16,
    fontWeight: `600`,
  },
  errorText: {
    color: `#dc3545`,
    marginTop: 8,
    fontSize: 14,
  },
  successText: {
    color: `#28a745`,
    marginTop: 8,
    fontSize: 14,
  },
  passwordStrength: {
    flexDirection: `row`,
    alignItems: `center`,
    marginTop: 8,
    gap: 8,
  },
  strengthBar: {
    height: 4,
    width: 60,
    borderRadius: 2,
  },
  strengthWeak: {
    backgroundColor: `#dc3545`,
  },
  strengthMedium: {
    backgroundColor: `#ffc107`,
  },
  strengthStrong: {
    backgroundColor: `#28a745`,
  },
  strengthText: {
    fontSize: 12,
    color: `#6c757d`,
  },
  attemptsText: {
    textAlign: `center`,
    color: `#6c757d`,
    fontSize: 12,
    marginTop: 8,
  },
});
