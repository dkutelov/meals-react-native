import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import {
  SettingsScreen,
  FavouriteScreen,
  CameraScreen,
} from "@features/settings/screens";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = () => (
  <SettingsStack.Navigator
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      headerMode: "screen",
    }}
  >
    <SettingsStack.Screen
      name="SettingsScreen"
      component={SettingsScreen}
      options={{ headerShown: false }}
    />
    <SettingsStack.Screen
      name="Favourites"
      component={FavouriteScreen}
      options={{ headerBackTitleVisible: false }}
    />
    <SettingsStack.Screen
      name="Camera"
      component={CameraScreen}
      options={{ headerBackTitleVisible: false }}
    />
  </SettingsStack.Navigator>
);
