
const {GAME_URL} = require('../config');

// this function could parse more tags to get who played what color, the date, rating information, etc.
// color and user information would probably be the most useful since they're common operations
const createGameArray = function(data) {
  const games = [];
  let currentGame = {};
  for(const line of data.split('\n')) {
    if(line === '')
      continue;
    // tag parsing
    if(line.startsWith('[')) {
      const siteTag = /\[Site "(.*?)"\]/;
      if(siteTag.test(line)) {
        // currentGame = {};
        const url = line.match(siteTag)[1];
        const id = url.slice(url.lastIndexOf('/')+1);
        currentGame.url = url;
        currentGame.detailsUrl = GAME_URL + id;
        currentGame.id = id;
      }
    } else if(line.startsWith('1.')) {
      currentGame.pgn = line;
      games.push(currentGame);
      currentGame = {};
    }
  }
  return games;
};

module.exports = {createGameArray};