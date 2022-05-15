const { locations: locationsMock } = require("./geocode.mock");
const url = require("url");

module.exports.geocodeRequest = (req, res) => {
  try {
    const { city } = url.parse(req.url, true).query;
    const locationMock = locationsMock[city.toLowerCase()];

    res.json(locationMock);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error getting location");
  }
};
