const { locations: locationsMock } = require("./geocode.mock");
const functions = require("firebase-functions");
const url = require("url");

module.exports.geocodeRequest = (req, res, client) => {
  try {
    const { city, mock } = url.parse(req.url, true).query;
    if (mock === "true") {
      const locationMock = locationsMock[city.toLowerCase()];

      return res.json(locationMock);
    }

    client
      .geocode({
        params: {
          address: city,
          key: functions.config().google.key,
        },
        timeout: 1000,
      })
      .then((response) => res.json(response.data))
      .catch((e) => res.status(400).send(e.res.data.error_message));
  } catch (error) {
    console.log(error);
    res.status(500).send("Error getting location");
  }
};
