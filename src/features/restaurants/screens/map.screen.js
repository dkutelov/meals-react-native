import React from "react";
import { Text, View } from "react-native";
import { SafeArea } from "../../../components/utilities/safe-area.component";

export const MapScreen = () => {
  return (
    <SafeArea>
      <View style={{ flex: 1 }}>
        <Text>Map!</Text>
      </View>
    </SafeArea>
  );
};
