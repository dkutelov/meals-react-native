import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantsContextProvider } from "@services/restaurants/restaurant.context";
import { LocationContextProvider } from "@services/location/location.context";
import { FavouritesContextProvider } from "@services/favourites/favourites.context";
import { MapScreen } from "@features/map/screens/map.screen";

import { screenOptions } from "@components/utilities/tab-icons";
import { RestaurantNavigator } from "./restaurants.navigator";
import { SettingsNavigator } from "./settings.navigator";
import { CheckoutNavigator } from "./checkout.navigator";

import { CartContextProvider } from "../../services/cart/cart.context";

export const AppNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <CartContextProvider>
            <Tab.Navigator screenOptions={screenOptions}>
              <Tab.Screen name="Restaurants" component={RestaurantNavigator} />
              <Tab.Screen name="Checkout" component={CheckoutNavigator} />
              <Tab.Screen
                name="Map"
                component={MapScreen}
                options={{ headerShown: false }}
              />
              <Tab.Screen
                name="Settings"
                component={SettingsNavigator}
                options={{ headerShown: false }}
              />
            </Tab.Navigator>
          </CartContextProvider>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
