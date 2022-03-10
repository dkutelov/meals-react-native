import React from "react";

import { RestaurantInfoCard } from "../components/restautant-info-card.component";

import { SafeArea } from "../../../components/utilities/safe-area.component";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
    </SafeArea>
  );
};
