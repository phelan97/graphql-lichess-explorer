const axios = require('axios');

module.exports = async (root, args) => {
  const data = await axios.get(`https://lichess.org/api/games/user/${args.username}?max=${args.limit}`)
                .then(response => console.log(response.data));
}