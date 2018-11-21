
const axios = require('axios');
const {USER_URL} = require('../../config');

module.exports = async (root, args) => await axios
  .get(USER_URL + args.username)
  .then(response => response.data);