var friends = require("../data/friends");
require("path");
//app.get(/api/friends) to dispaly json
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    console.log(friends);
    app.post("/api/friends", function (req, res) {

    })
}

