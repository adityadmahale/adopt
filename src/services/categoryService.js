import http from "./httpService";

const url = "/categories";

export const getCategories = function () {
  return http.get(url);
};
