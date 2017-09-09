var http = require("http");
var express = require("express");
var path = require("path");
var app = express();

app.set("port", (process.env.PORT || 3000));

//Set up static routes
app.use(express.static(__dirname + "/public"));

app.get("*", function(req, res){
  res.sendFile(path.resolve(__dirname,"public","index.html"));
});

app.listen(app.get("port"), function() {
  console.log("Diving off port " + app.get("port"));
});
