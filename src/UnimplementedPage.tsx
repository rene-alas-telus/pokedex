import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { Box, Typography, FlexGrid } from "@telus-uds/components-base";
import { useNavigation } from "@react-navigation/native";

export default function UnimplementedPage() {
  // const navigation = useNavigation();
  return (
    <Box
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 48,
      }}
    >
      <FlexGrid>
        <FlexGrid.Row>
          <FlexGrid.Col md={12}>
            <Typography>A Hello New Universe ...</Typography>
          </FlexGrid.Col>
        </FlexGrid.Row>
        <FlexGrid.Row>
          <FlexGrid.Col md={12}>
            <Pressable>
              <Text
                style={Styles.linkStyle}
                onPress={() => {
                  // navigation.goBack();
                }}
              >
                Go back
              </Text>
            </Pressable>
          </FlexGrid.Col>
        </FlexGrid.Row>
        <FlexGrid.Row>
          <FlexGrid.Col md={12}>
            <View style={Styles.container}>
              <Image
                style={Styles.imageStyle}
                source={{
                  uri: "https://i.pinimg.com/originals/25/76/ab/2576ab3a50ccdae861fc5abcfa20a1dc.gif",
                }}
              />
            </View>
          </FlexGrid.Col>
        </FlexGrid.Row>
      </FlexGrid>
    </Box>
  );
}

const Styles = StyleSheet.create({
  container: {
    alignContent: "space-around",
    margin: 25,
  },
  imageStyle: {
    width: 250,
    height: 250,
  },
  linkStyle: {
    color: "green",
    textDecorationLine: "underline",
  },
});
