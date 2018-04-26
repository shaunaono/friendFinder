//routes
var friendsData = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsList);
  });
};

app.post("/api/friends", function(req, res) {
  var newFriendScores = req.body.scores;
  var scoresArray = [];
  var friendCount = 0;
  var bestMatch = 0;

  for (var i = 0; i < friendList.length; i++) {
    var totalDifference = 0;
    for (var f = 0; f < newFriendScores.length; i++) {
      totalDifference += Math.abs(
        parsInt(friendsList[i].scores[f]) - parseInt(newFriendsScore[f])
      );
    }
    scoresArray.push(totalDifference);
  }
  for (var i = 0; i < scoresArray.length; i++) {
    if (scoresArray <= scoresArray[bestMatch]) {
      bestMatch = i;
    }
  }
  var newBestFriend = friendList[bestMatch];
  res.json(newBestFriend);

  friendList.push(req.body);
});
