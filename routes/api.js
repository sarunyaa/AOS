const express = require('express');
const router = express.Router();
const Todo = require('../models/todos');

//GET, retourne la liste des todos
router.get('/todos', function(req,res,next){
  Todo.find({}).then(function(todos){
    res.send(todos);
  });
});

//POST, ajout d'un todo
router.post('/todos', function(req,res, next){
  Todo.create(req.body).then(function(todo){
    res.send(todo);
  }).catch(next);
});

//PUT, MàJ d'un todo
router.put('/todos/:id', function(req,res, next){
  Todo.findByIdAndUpdate({_id:req.params.id},req.body).then(function(todo){
    Todo.findOne({_id:req.params.id}).then(function(todo){
      res.send(todo);
    });
  });
});

//DELETE, suppression d'un todo
router.delete('/todos/:id', function(req,res, next){
  //console.log(req.params.id);
  Todo.findByIdAndRemove({_id:req.params.id}).then(function(todo){
    res.send(todo);
  });
});


module.exports = router;
