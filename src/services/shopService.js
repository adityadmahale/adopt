import http from "./httpService";

const url = "/plants";

export const getPlants = function () {
  return http.get(url);
};
