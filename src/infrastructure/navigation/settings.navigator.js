import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { SettingsScreen } from "@features/settings/screens/settings.screen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = () => (
  <SettingsStack.Navigator
    headerMode="screen"
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <SettingsStack.Screen
      name="Settings"
      component={SettingsScreen}
      options={{ header: () => null }}
    />
    <SettingsStack.Screen name="Favourites" component={() => null} />
  </SettingsStack.Navigator>
);
