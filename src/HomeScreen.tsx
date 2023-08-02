import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux"; // Import connect from react-redux

const HomeScreen = (props: {
  isAuthenticated: any;
  userName:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined;
}) => {
  return (
    <View style={styles.container}>
      {props.isAuthenticated ? (
        <Text style={styles.text}>Welcome, {props.userName}!</Text>
      ) : (
        <Text style={styles.text}>Not authenticated.</Text>
      )}
    </View>
  );
};

const mapStateToProps = (state: { userName: any; isAuthenticated: any }) => {
  return {
    userName: state.userName,
    isAuthenticated: state.isAuthenticated,
  };
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

export default connect(mapStateToProps)(HomeScreen);
