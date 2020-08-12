var express = require("express");
var PORT = process.env.PORT || 3306;
var app = express();
app.use(express.static("public"));