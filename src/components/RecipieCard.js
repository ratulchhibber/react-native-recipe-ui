import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { colors, recipeList } from "../Constant";
import { FontAwesome } from "@expo/vector-icons";

const RecipieCard = () => {
  return (
    <View>
      <FlatList
        data={recipeList}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: colors.COLOR_LIGHT,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 7,
              borderRadius: 16,
              marginVertical: 16,
              paddingHorizontal: 8,
              paddingVertical: 26,
              alignItems: "center",
            }}
          >
            <Image
              source={item.image}
              style={{ width: 150, height: 150, resizeMode: "center" }}
            />

            <View style={{ marginVertical: 10 }}>
              <Text>{item.name}</Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <Text>{item.time}</Text>
              <Text> | </Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginRight: 4 }}>{item.rating}</Text>
                <FontAwesome
                  name="star"
                  size={16}
                  color={colors.COLOR_PRIMARY}
                />
              </View>
            </View>
          </View>
        )}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default RecipieCard;

const styles = StyleSheet.create({});
