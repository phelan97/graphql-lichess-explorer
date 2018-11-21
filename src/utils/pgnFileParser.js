
const createGameArray = function(data) {
  let games = 0;
  const output = [];
  for(const line of data.split('\n')) {
    let currentGameObj = {};
    if(line === '')
      continue;
    // tag parsing
    if(line.startsWith('[')) {
      const siteTag = /\[Site "(.*)"\]/g;
      if(siteTag.test(line)) {
        const url = line.match(siteTag)[0];
        const id = url.split('/')[-1];
        currentGameObj.url = url;
        console.log(url);
        console.log(id);
      }
    } else if(line.startsWith('1.')) {
      console.log(line);
      games++;
    }
    // console.log('line', line);
  }
  return [{id: 1, url:'placeholder', pgn:'pgn here'}]
}

module.exports = {createGameArray};