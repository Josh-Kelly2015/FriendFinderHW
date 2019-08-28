// app.get(/survey)
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// route to survey
app.get("/app/public/survey.html", function (req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});

//default catch all route to home.html
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

//listen method
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
