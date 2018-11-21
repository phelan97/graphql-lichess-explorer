const axios = require('axios');
const {createGameArray} = require('../../utils/pgnFileParser');
const {EXPORT_URL} = require('../../config');

module.exports = async (root, args) => {
  const data = await axios.get(EXPORT_URL + args.username + `?max=${args.limit}`)
    .then(response => response.data);
  return await createGameArray(data);
}