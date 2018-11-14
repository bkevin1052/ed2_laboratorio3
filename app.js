var express = require('express');
var bodyParser = require('body-parser');

var pizza = require('./routes/pizza'); // IMPORTS DE PIZZAS
var app = express();


//CONFIGURACION DE LA CONEXION
var mongoose = require('mongoose');
var dev_db_url = 'mongodb://localhost:27017/PizzasDB';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/pizzas', pizza);

var port = 3000;

app.listen(port, () => {
    console.log('Numero del puerto: localhost:3000/pizzas ' + port);
});