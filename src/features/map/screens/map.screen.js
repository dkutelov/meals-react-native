import React, { useContext, useState, useEffect } from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";

import { LocationContext } from "@services/location/location.context";
import { RestaurantsContext } from "@services/restaurants/restaurant.context";
import { Search } from "../components/search.component";
import { MapCallout } from "../components/map-callout.component";

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export const RestaurantMap = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { lat, lng, viewport } = location;
  const { restaurants = [] } = useContext(RestaurantsContext);
  const [latDelta, setLatDelta] = useState(0);

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    const currentlatDelta = northeastLat - southwestLat;

    setLatDelta(currentlatDelta);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.01,
        }}
      >
        {restaurants.map((r, index) => (
          <MapView.Marker
            key={`${r.name}-${index}`}
            title={r.name}
            coordinate={{
              latitude: r.geometry.location.lat,
              longitude: r.geometry.location.lng,
            }}
          >
            <MapView.Callout
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: r })
              }
            >
              <MapCallout restaurant={r} />
            </MapView.Callout>
          </MapView.Marker>
        ))}
      </Map>
    </>
  );
};

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  if (!location) {
    return (
      <Map
        region={{
          latitude: 0,
          longitude: 0,
        }}
      />
    );
  }
  return <RestaurantMap navigation={navigation} />;
};
