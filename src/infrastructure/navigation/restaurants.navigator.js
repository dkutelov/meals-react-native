import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurant.screen";

export const RestaurantNavigator = () => {
  const RestaurantStack = createNativeStackNavigator();
  return (
    <RestaurantStack.Navigator>
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
    </RestaurantStack.Navigator>
  );
};
