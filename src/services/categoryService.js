const axios = require("axios");
const { apiUrl } = require("../config.json");

const url = apiUrl + "/categories";

module.exports.getCategories = function () {
  return axios.get(url);
};
