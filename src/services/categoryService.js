import http from "./httpService";
import { apiUrl } from "../config.json";

const url = apiUrl + "/categories";

export const getCategories = function () {
  return http.get(url);
};
