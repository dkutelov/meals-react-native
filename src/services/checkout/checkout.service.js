import createStripe from "stripe-client";
import { host } from "../../utils/env";

const stripe = createStripe("pk_test_MDxNQI9pKFgcODiEl0SWjMUk");

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = (token, amount, name) => {
  return fetch(`${host}/pay`, {
    method: "POST",
    body: JSON.stringify({
      token,
      name,
      amount,
    }),
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject("Something went wrong!");
    }
    return res.json();
  });
};
