import React from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restautant-info-card.component";

const RestaurantSafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight};
`;

const RestaurantList = styled.View`
  flex: 1;
  background-color: #dedede;
  padding: 15px;
`;

const Search = styled.View`
  padding: 15px;
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <RestaurantSafeArea>
      <Search>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </Search>
      <RestaurantList>
        <RestaurantInfoCard />
      </RestaurantList>
    </RestaurantSafeArea>
  );
};
