const MatchSimulator = require('../match/matchSimulator');
const MatchStatus = require('../match/matchStatus');

var Match = function (teams) {

    //required run 40 in 4 overs(24 ball) 
    var remainingBalls = 24;
    var requiredRuns = 40;
    var matchstats = new MatchStatus(teams, requiredRuns, remainingBalls);
    var matchSimulator = new MatchSimulator(matchstats);
    return matchSimulator.startMatch();

};

module.exports = Match;
