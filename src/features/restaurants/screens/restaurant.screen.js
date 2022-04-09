import React, { useContext, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restautant-info-card.component";
import { SafeArea } from "@components/utilities/safe-area.component";
import { RestaurantsContext } from "@services/restaurants/restaurant.context";
import { FavouritesContext } from "@services/favourites/favourites.context";
import { LoadingIndicator } from "@components/loading/loading.component";
import { Search } from "../components/search.component";
import { FavouritesBar } from "@components/favourites/favourites-bar.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

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
            <RestaurantInfoCard restaurant={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
      />
    </SafeArea>
  );
};
