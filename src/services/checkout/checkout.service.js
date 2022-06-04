import createStripe from "stripe-client";

const stripe = createStripe("pk_test_MDxNQI9pKFgcODiEl0SWjMUk");

export const cardTokenRequest = (card) => stripe.createToken({ card });
