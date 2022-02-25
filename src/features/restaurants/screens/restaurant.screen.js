import React, { useContext } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restautant-info-card.component";
import { SafeArea } from "../../../components/utilities/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurant.context";
import { LoadingIndicator } from "../../../components/loading/loading.component";
import { Search } from "../components/search.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {isLoading && <LoadingIndicator />}
      <Search />

      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
      />
    </SafeArea>
  );
};
