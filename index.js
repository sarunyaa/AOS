const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();


//connexion à mongodb
mongoose.connect('mongodb://localhost/todoList');
mongoose.Promise = global.Promise;

app.use(express.static('public'));


app.use(bodyParser.json());

//initialisation des routes
app.use('/api',require('./routes/api'));

//erreur
app.use(function(err,req,res,next){
//  console.log(err);
res.status(422).send({error: err.message});
});

app.listen(process.env.port || 4000, function(){
  console.log('ça marche !');
});
