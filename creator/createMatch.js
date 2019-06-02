const MatchSimulator  = require('../match/matchSimulator');
const MatchStat       = require('../match/matchStats');

var Match = function (teams) {

  //required run 40 in 4 overs(24 ball)  
  var matchstat       = new MatchStat(teams, 40, 24);
  var matchSimulator  = new MatchSimulator(matchstat);

  return matchSimulator.startMatch();

};

module.exports = Match;
