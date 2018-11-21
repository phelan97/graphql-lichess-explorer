const axios = require('axios');
const {createGameArray} = require('../../utils/pgnFileParser');

module.exports = async (root, args) => {
  const data = await axios.get(`https://lichess.org/api/games/user/${args.username}?max=${args.limit}`)
                .then(response => response.data);
  return await createGameArray(data);
}