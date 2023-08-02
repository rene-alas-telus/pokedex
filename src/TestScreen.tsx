import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TestScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>I'm the Pokemon Screen.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default TestScreen;
