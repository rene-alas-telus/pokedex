import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { setCredentials, setAuthenticated } from "../store/store";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
} from "react-native-reanimated";

const LoginScreen = (props: {
  navigation: { navigate: (arg0: string) => void };
}) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const animatedValue = useSharedValue(0);

  const dispatch = useDispatch();

  const handleLogin = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (userName.length > 0 && password.length > 0) {
      if (!emailPattern.test(userName)) {
        alert("Invalid email address");
        return;
      }

      dispatch(setCredentials(userName, password));
      dispatch(setAuthenticated(true));
      animateImage();
    } else {
      alert("No Info provided");
    }
  };

  const animateImage = () => {
    animatedValue.value = withTiming(1, { duration: 1000 });
  };

  const animatedStyle = useAnimatedStyle(() => {
    const shakeAmount = 20;
    const interpolatedValue = interpolate(
      animatedValue.value,
      [0, 0.5, 1],
      [0, -shakeAmount, 0]
    );

    return {
      transform: [{ translateX: interpolatedValue }],
    };
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokedex</Text>

      <Animated.Image
        source={require("../assets/images/pokeball.png")}
        style={[styles.image, animatedStyle]}
      />

      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUserName(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  loginButton: {
    width: "80%",
    height: 40,
    backgroundColor: "blue",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default LoginScreen;
