import camelize from "camelize";

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((r) => {
    return {
      ...r,
      address: r.vicinity,
      isOpenNow: !!r.opening_hours?.open_now,
      isClosedTemporarily: r.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};

export const restaurantsRequest = (location) => {
  return fetch(
    `http://localhost:5001/mealstogo-5262a/us-central1/placesNearBy?location=${location}`
  ).then((res) => {
    return res.json();
  });
};
