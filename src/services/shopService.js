const axios = require("axios");
const { apiUrl } = require("../config.json");

const url = apiUrl + "/plants";

module.exports.getPlants = function () {
  return axios.get(url);
};
