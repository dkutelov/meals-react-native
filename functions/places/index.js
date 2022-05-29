const { mocks, addMockImage } = require("./mock");
const url = require("url");
module.exports.placesRequest = (req, res) => {
  try {
    const { location } = url.parse(req.url, true).query;
    const data = mocks[location];
    if (data) {
      data.results = data.results.map(addMockImage);
    }
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error getting location");
  }
};
