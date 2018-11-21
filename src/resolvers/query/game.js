const axios = require('axios');
const {EXPORT_URL} = require('../../config');

module.exports = async (root, args) => await axios
  .get(EXPORT_URL + args.id)
  .then(result => result.data);