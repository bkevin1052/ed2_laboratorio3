var Pizza = require('../models/pizza');
var HttpStatus = require('http-status-codes');
var tryparse = require('tryparse');
var status = require('statuses')

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.pizza_create = function (req, res) {
    var pizza = new Pizza(); 
        pizza.nombre = req.body.nombre;
        if(pizza.nombre ==null)
        {
            res.status(422).send('Falta el nombre')
            return;
        }

        pizza.descripcion = req.body.descripcion;
        if(pizza.descripcion ==null)
        {
            res.status(422).send('Falta la descripción')
            return;
        }      

        pizza.ingredientes = req.body.ingredientes;
        if(pizza.ingredientes ==null)
        {
            res.status(422).send('Faltan los ingredientes')
            return;
        }

        pizza.tipoMasa = req.body.tipoMasa;
        if(pizza.tipoMasa ==null)
        {
            res.status(422).send('Falta el tipo de masa')
            return;
        }

        pizza.tamanio = req.body.tamanio;
        if(pizza.tamanio ==null)
        {
            res.status(422).send('Falta el tamaño')
            return;
        }

        pizza.cantidadPorciones = req.body.cantidadPorciones;
        if(pizza.cantidadPorciones ==null)
        {
            res.status(422).send('Falta la cantidad de porciones')
            return;
        }
        else if(tryparse.int(pizza.cantidadPorciones) == null)
        {
            res.status(422).send('No es un número de porciones válido')
            return;
        }

        pizza.quesoExtra = req.body.quesoExtra; 
        if(pizza.quesoExtra ==null)
        {
            res.status(422).send('Por favor, indique si quiere queso extra')
            return;
        }

    pizza.save(function (err) {
        if (err) {
            res.status(400).send(err.message);
        }
        res.status(200).send('Pizza Creada Exitosamente')
    })
};

exports.pizza_details = function (req, res) {
    Pizza.findById(req.params.id, function (err, pizza) {
        
        if (err) res.status(404).send(err.message);
        res.status(200).send(pizza);
    });
};

exports.pizza_update = function (req, res) { 
 
    var pizza = new Pizza(); 

    pizza.nombre = req.body.nombre;
    if(pizza.nombre ==null)
    {
        res.status(422).send('Falta el nombre')
        return;
    }

    pizza.descripcion = req.body.descripcion;
    if(pizza.descripcion ==null)
    {
        res.status(422).send('Falta la descripción')
        return;
    }      

    pizza.ingredientes = req.body.ingredientes;
    if(pizza.ingredientes ==null)
    {
        res.status(422).send('Faltan los ingredientes')
        return;
    }

    pizza.tipoMasa = req.body.tipoMasa;
    if(pizza.tipoMasa ==null)
    {
        res.status(422).send('Falta el tipo de masa')
        return;
    }

    pizza.tamanio = req.body.tamanio;
    if(pizza.tamanio ==null)
    {
        res.status(422).send('Falta el tamaño')
        return;
    }

    pizza.cantidadPorciones = req.body.cantidadPorciones;
    if(pizza.cantidadPorciones ==null)
    {
        res.status(422).send('Falta la cantidad de porciones')
        return;
    }
    else if(tryparse.int(pizza.cantidadPorciones) == null)
    {
        res.status(422).send('No es un número de porciones válido')
        return;
    }

    pizza.quesoExtra = req.body.quesoExtra; 
    if(pizza.quesoExtra ==null)
    {
        res.status(422).send('Por favor, indique si quiere queso extra')
        return;
    }

    Pizza.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, pizza) {
        if (err) {res.status(404).send(err.message);}
        res.status(200).send('Pizza Actualizada');
    });
};

exports.pizza_delete = function (req, res) {
    Pizza.findByIdAndRemove(req.params.id, function (err) {
        if (err) res.status(404).send(err.message);
        res.status(200).send('Pizza Eliminada Exitosamente!');
    })
};