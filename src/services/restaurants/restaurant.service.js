import camelize from "camelize";
import { host, isMock } from "../../utils/env";

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
  return fetch(`${host}/placesNearBy?location=${location}&mock=${isMock}`).then(
    (res) => {
      return res.json();
    }
  );
};
