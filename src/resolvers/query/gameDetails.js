const axios = require('axios');

module.exports = async (root, args) => await axios
  .get(`https://lichess.org/api/game/${args.id}`)
  // .catch(() => {})
  // .then(() => console.log(`https://lichess.org/api/game/${args.gameId}`))
  .then(response => response.data);