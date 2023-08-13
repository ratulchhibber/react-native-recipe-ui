import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";

const RecipieListScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
      <View>
        <Header headerText={"Hi, John"} headerIcon={"bell-o"} />
        <SearchFilter />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default RecipieListScreen;
