import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MapScreen } from "../../features/map/screens/map.screen";
import { SettingsScreen } from "../../features/restaurants/screens/settings.screen";
import { screenOptions } from "../../components/utilities/tab-icons";
import { RestaurantNavigator } from "./restaurants.navigator";

export const Navigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Restaurants" component={RestaurantNavigator} />
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
