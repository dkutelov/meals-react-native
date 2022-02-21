import React from "react";
import { Text, View } from "react-native";
import { SafeArea } from "../../../components/utilities/safe-area.component";

export const SettingsScreen = () => {
  return (
    <SafeArea>
      <View style={{ flex: 1 }}>
        <Text>Settings!</Text>
      </View>
    </SafeArea>
  );
};
