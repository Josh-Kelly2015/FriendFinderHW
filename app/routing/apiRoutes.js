// app.get(/survey)
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//app.get(/api/friends) to dispaly json
app.get("/api/friends", function (req, res) {
    return res.json(friends);
});

// app.post(/api/friends) handle incoming survey results 
//and compatability logic
app.post("/api/friends", function(req, res) {

    var newMatch = req.body;

    newMatch.routeName = newMatch.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newMatch);
  
    friends.push(newMatch);
  
    res.json(newMatch);
  });
  


//listen method
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
