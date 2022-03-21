import React from "react";
import WebView from "react-native-webview";
import styled from "styled-components/native";
import { Text } from "../typography/text.component";
import { Platform } from "react-native";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 120px;
`;

const CompactWebImage = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 120px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const Image = isAndroid && isMap ? CompactWebImage : CompactImage;
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};
