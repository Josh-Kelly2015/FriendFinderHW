var friends = require("../data/friends");
var path = require("path");
//app.get(/api/friends) to dispaly json
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
  
    app.post("/api/friends", function (req, res) {
        // this is where i will parse my user data and apply js logic to compare and find the best match for the user
    })
};

