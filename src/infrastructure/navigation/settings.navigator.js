import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { SettingsScreen } from "@features/settings/screens/settings.screen";
import { FavouriteScreen } from "@features/settings/screens/favourites.screen";

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
  </SettingsStack.Navigator>
);
