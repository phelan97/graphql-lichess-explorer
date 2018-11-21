
const axios = require('axios');

module.exports = async (root, args) => await axios
  .get(`https://lichess.org/api/user/${args.username}`)
  .then(response => response.data);