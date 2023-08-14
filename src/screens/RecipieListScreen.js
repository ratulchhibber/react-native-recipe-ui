import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";

const RecipieListScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
      <Header headerText={"Hi, John"} headerIcon={"bell-o"} />

      <SearchFilter
        icon={"search"}
        placeholder={"Enter your favorite recipie"}
      />

      <View>
        <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 16 }}>
          Categories
        </Text>
        <CategoriesFilter />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default RecipieListScreen;
