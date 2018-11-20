const axios = require('axios');

module.exports = async (root, args) => await axios
  .get(`https://lichess.org/game/export/${args.gameId}`)
  .then(response => response.data);