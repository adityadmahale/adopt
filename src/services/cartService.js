import http from "./httpService";

const url = "/carts";

export const postCart = function (plants) {
  return http.post(url, { plants });
};

export const getCarts = function () {
  return http.get(url + "/me");
};
