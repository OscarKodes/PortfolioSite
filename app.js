// REQUIREMENTS =====================================
const express = require("express");
const app = express();
const ejs = require("ejs");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// ROUTES ============================================

app.get("/", function(req, res){
  res.redirect("/front");
});

app.get("/front", function(req, res){
  res.render("front");
});

app.get("/projects", function(req, res){
  res.render("projects");
});

app.get("/skill-set", function(req, res){
  res.render("skill-set");
});

app.get("/contact", function(req, res){
  res.render("contact");
});


app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
