import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "@features/restaurants/components/restautant-info-card.component";
import { FavouritesContext } from "@services/favourites/favourites.context";
import { SafeArea, Text } from "@components";
import { RestaurantList } from "@features/restaurants/components/restaurant-list.styles";

const NoFavouritesArea = styled(SafeArea)`
  margin-top: ${(props) => props.theme.space[3]};
  align-items: center;
  justify-content: center;
`;

export const FavouriteScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  return favourites.length ? (
    <>
      <RestaurantList
        data={favourites}
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
    </>
  ) : (
    <NoFavouritesArea>
      <Text center>No favourites yet</Text>
    </NoFavouritesArea>
  );
};
