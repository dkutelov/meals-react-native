import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { RestaurantsScreen } from "@features/restaurants/screens/restaurant.screen";
import { RestaurantDetailScreen } from "@features/restaurants/screens/restaurant-detail.screen";

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
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
