import React from "react";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled.Text`
  padding: 16px;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    icon,
    photos = [
      "https://edosushi.bg/wp-content/uploads/2015/08/Edo-55-845x684.jpg",
    ],
    address = "Ring Mall Sofia",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "#fff" },
  cover: {
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    padding: 16,
  },
});
