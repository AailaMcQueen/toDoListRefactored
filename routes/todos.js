var express = require('express');
var router =  express.Router();
var db  = require('../models');

router.get("/", function(req, res){
    db.ToDo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    })
})

router.post('/', function(req, res){
    //res.send(req.body);
    db.ToDo.create(req.body)
    .then(function(newTodo){
        res.json(newTodo);
    })
    .catch(function(err){
        res.send(err);
    })
});

module.exports = router;