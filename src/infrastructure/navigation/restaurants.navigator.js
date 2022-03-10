import React from "react";
import { Text } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurant.screen";

export const RestaurantNavigator = () => {
  const RestaurantStack = createStackNavigator();
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalSlideFromBottomIOS,
        headerShown: false,
      }}
    >
      <RestaurantStack.Screen
        name="RestaurantList"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={() => <Text>Detail</Text>}
      />
    </RestaurantStack.Navigator>
  );
};
