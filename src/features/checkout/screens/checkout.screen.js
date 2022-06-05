import React, { useContext, useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { SafeArea } from "@components/utilities/safe-area.component";
import { Text } from "@components/typography/text.component";
import { Spacer } from "@components/spacer/spacer.component";
import { CartContext } from "@services/cart/cart.context";
import { CreditCardInput } from "../components/credit-card.component";
import { RestaurantInfoCard } from "@features/restaurants/components/restautant-info-card.component";
import {
  CartIconContainer,
  CartIcon,
  NameInput,
  PayButton,
  ClearButton,
} from "../components/checkout.styles";

export const CheckoutScreen = () => {
  const { cart, restaurant, sum, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");

  if (!cart || !restaurant) {
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Text>Your cart is empty!</Text>
        </CartIconContainer>
      </SafeArea>
    );
  }
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <Spacer position="left" size="large">
          <Spacer position="top" size="large">
            <Text>Your Order</Text>
          </Spacer>
          <List.Section>
            {cart.map(({ item, price }, index) => (
              <List.Item
                key={`${item}-${index}`}
                title={`${item} - ${price / 100}`}
              />
            ))}
          </List.Section>
          <Text>Total: {sum / 100}</Text>
        </Spacer>
        <NameInput
          label="Name"
          value={name}
          onChangeText={(t) => {
            setName(t);
          }}
        />
        <Spacer position="top" size="large">
          {name.length > 0 && <CreditCardInput name={name} />}
        </Spacer>
        <Spacer position="top" size="xxl" />
        <PayButton icon="cash-usd" mode="contained" onPress={() => {}}>
          Pay
        </PayButton>
        <Spacer position="top" size="large" />
        <ClearButton icon="cart-off" mode="contained" onPress={clearCart}>
          Clear Cart
        </ClearButton>
      </ScrollView>
    </SafeArea>
  );
};
