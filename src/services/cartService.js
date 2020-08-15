import http from "./httpService";
import { apiUrl } from "../config.json";

const url = apiUrl + "/carts";

export const postCart = function (plants) {
  return http.post(url, { plants });
};

export const getCarts = function () {
  return http.get(url + "/me");
};
