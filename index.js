var express = require("express");
var app = express(),
    bodyParser = require("body-parser");
var toDoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(express.static(__dirname+"/public"));
app.use(express.static(__dirname+"/views"));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(process.env.PORT || 3000, function(){
    console.log("App Launched!");
});

app.use('/api/todos', toDoRoutes);

app.get("/", function(req, res){
	res.sendFile("index.html");
})