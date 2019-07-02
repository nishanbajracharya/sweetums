const axios = require('axios');
const qs = require('querystring');

const constants = require('../constants');

const instance = axios.create({
  baseURL: constants.BASE_API_URL
});

function get(url) {
  return instance.get(url);
}

function post(url, body) {
  return instance.post(url, qs.stringify(body));
}

module.exports = {
  get,
  post,
  axios,
  instance
};
