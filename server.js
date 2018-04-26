//Dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
//express server
var app = express();
//set up port
var PORT = process.env.PORT || 8080;
//data parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
//starts server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
