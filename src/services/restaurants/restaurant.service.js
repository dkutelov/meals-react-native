import camelize from "camelize";
import { mocks, mockImages } from "./mock";

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((r) => {
    r.photos = r.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });

    return {
      ...r,
      isOpenNow: !!r.opening_hours?.open_now,
      isClosedTemporarily: r.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};
