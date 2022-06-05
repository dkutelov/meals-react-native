module.exports.payRequest = (req, res, stripeClient) => {
  const data = JSON.parse(req.body);
  const { token, amount } = data;

  stripeClient.paymentIntents
    .create({
      amount,
      currency: "BGN",
      payment_method_types: ["card"],
      payment_method_data: {
        type: "card",
        card: {
          token,
        },
      },
      confirm: true,
    })
    .then((paymentIntent) => {
      res.json(paymentIntent);
    })
    .catch((e) => {
      console.log(e);
      res.status(400);
      res.send(e);
    });
};
