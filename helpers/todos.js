var db = require("../models");

exports.getTodos = function(req, res){
    db.ToDo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.createTodo = function(req, res){
    db.ToDo.create(req.body)
    .then(function(newTodo){
        res.json(newTodo);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.getTodo = function(req, res){
    db.ToDo.findById(req.params.todoId)
    .then(function(todo){
        res.json(todo);
    })
    .catch(function(err){
        res.send(err);
    });
}

exports.updateTodo = function(req, res){
    db.ToDo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
    .then(function(todo){
        res.json(todo);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.deleteTodo = function(req, res){
    db.ToDo.remove({_id: req.params.todoId})
    .then(function(todo){
        res.json({message: "Deleted!"});
    })
    .catch(function(err){
        res.send(err);
    })
}

module.exports = exports;