const axios = require('axios');
const {GAME_URL} = require('../../config');

module.exports = async (root, args) => await axios
  .get(GAME_URL + args.id)
  .then(response => response.data);