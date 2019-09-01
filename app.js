// REQUIREMENTS =====================================
const express = require("express");
const app = express();
const ejs = require("ejs");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// ROUTES ============================================

app.get("/", function(req, res){
  res.render("front");
});

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
