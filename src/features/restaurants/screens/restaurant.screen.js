import React from "react";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantInfoCard } from "../components/restautant-info-card.component";
import { SafeArea } from "../../../components/utilities/safe-area.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Search = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeArea>
      <Search>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </Search>

      <RestaurantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
        ]}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
      />
    </SafeArea>
  );
};
