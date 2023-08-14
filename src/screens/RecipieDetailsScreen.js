import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const RecipieDetailsScreen = () => {
  return (
    <View style={{ backgroundColor: "#6f4e37", flex: 1 }}>
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
          marginTop: 240,
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
          alignItems: "center",
        }}
      >
        <View
          style={{
            // backgroundColor: "red",
            height: 300,
            width: 300,
            position: "absolute",
            top: -150,
          }}
        >
          <Image
            source={require("../../assets/images/hotdog.png")}
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          />
        </View>
      </View>
    </View>
  );
};

export default RecipieDetailsScreen;

const styles = StyleSheet.create({});
