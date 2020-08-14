import http from "./httpService";
import { apiUrl } from "../config.json";

const url = apiUrl + "/plants";

export const getPlants = function () {
  return http.get(url);
};
