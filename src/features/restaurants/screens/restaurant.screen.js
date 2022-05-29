import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";

import { RestaurantsContext } from "@services/restaurants/restaurant.context";
import { FavouritesContext } from "@services/favourites/favourites.context";
import {
  LoadingIndicator,
  FadeInView,
  SafeArea,
  FavouritesBar,
} from "@components";

import { RestaurantInfoCard, RestaurantList, Search } from "../components";

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggles] = useState(false);

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
    </SafeArea>
  );
};
