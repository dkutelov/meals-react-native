const { mocks, addMockImage } = require("./mock");
const functions = require("firebase-functions");
const url = require("url");

const addGoogleImage = (restaurant) => {
  const ref =
    restaurant.photos &&
    restaurant.photos.length > 0 &&
    restaurant.photos[0]?.photo_reference;

  if (!ref) {
    restaurant.photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ];
  } else {
    restaurant.photos = [
      `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${ref}&key=${
        functions.config().google.key
      }`,
    ];
  }

  return restaurant;
};

module.exports.placesRequest = (req, res, client) => {
  try {
    const { location, mock } = url.parse(req.url, true).query;

    if (mock === "true") {
      const data = mocks[location];
      if (data) {
        data.results = data.results.map(addMockImage);
      }
      return res.json(data);
    }
    client
      .placesNearby({
        params: {
          location,
          radius: 1500,
          type: "restaurant",
          key: functions.config().google.key,
        },
        timeout: 1000,
      })
      .then((response) => {
        response.data.results = response.data.results.map(addGoogleImage);
        return res.json(response.data);
      })
      .catch((e) => {
        res.status(400);
        console.log(e);
        return res.send(e.response?.data?.error_message);
      });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error getting location");
  }
};
