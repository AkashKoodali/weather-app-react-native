import { Image, SafeAreaView, Text, TextInput, View } from "react-native";
import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { theme } from "../theme";

export class Home extends Component {
  render() {
    return (
      <View className="flex flex-1">
        <StatusBar style="light" />
        <Image
          source={require("../assets/images/bg.png")}
          className="absolute h-full w-full"
          blurRadius={70}
        />
        <SafeAreaView className="flex flex-1">
          {/* search section */}
          <View style={{ height: "7%" }} className="mx-4 relative z-50">
            <View
              className="flex-row justify-end items-center rounded-full"
              style={{
                backgroundColor: theme.bgWhite(0.2),
              }}
            >
              <TextInput
                placeholder="Search city"
                placeholderTextColor={"lightgray"}
              />
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

export default Home;
