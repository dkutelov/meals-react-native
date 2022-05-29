import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";

import { RestaurantsContext } from "@services/restaurants/restaurant.context";
import { LocationContext } from "@services/location/location.context";
import { FavouritesContext } from "@services/favourites/favourites.context";
import {
  LoadingIndicator,
  FadeInView,
  SafeArea,
  FavouritesBar,
  Text,
  Spacer,
} from "@components";

import { RestaurantInfoCard, RestaurantList, Search } from "../components";

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  const { error: locationError } = useContext(LocationContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggles] = useState(false);
  const hasError = !!error || !!locationError;

  return (
    <SafeArea>
      {isLoading && <LoadingIndicator />}
      <Search
        isFavToggled={isToggled}
        onFavToggle={() => setIsToggles(!isToggled)}
      />

      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      {hasError && (
        <Spacer position="left" size="large">
          <Text variant="error">Something went wrong retrieving the data!</Text>
        </Spacer>
      )}
      {!hasError && (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <FadeInView>
                <RestaurantInfoCard restaurant={item} />
              </FadeInView>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => `${item.name}-${index}`}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeArea>
  );
};
