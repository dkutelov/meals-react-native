import camelize from "camelize";
import { mocks } from "./mock";

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((r) => ({
    ...r,
    isOpenNow: !!r.opening_hours?.open_now,
    isClosedTemporarily: r.business_status === "CLOSED_TEMPORARILY",
  }));
  return camelize(mappedResults);
};

export const restaurantsRequest = (location = "43.653225,-79.383186") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }

    resolve(mock);
  });
};
