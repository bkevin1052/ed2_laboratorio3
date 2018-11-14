var Pizza = require('../models/pizza');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.pizza_create = function (req, res) {
    var pizza = new Pizza();        
        pizza.nombre = req.body.nombre;
        pizza.descripcion = req.body.descripcion;
        pizza.ingredientes = req.body.ingredientes;
        pizza.tipoMasa = req.body.tipoMasa;
        pizza.tamanio = req.body.tamanio;
        pizza.cantidadPorciones = req.body.cantidadPorciones;
        pizza.quesoExtra = req.body.quesoExtra; 
    pizza.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Pizza Creada Exitosamente')
    })
};

exports.pizza_details = function (req, res) {
    Pizza.findById(req.params.id, function (err, pizza) {
        if (err) return next(err);
        res.send(pizza);
    });
};

exports.pizza_update = function (req, res) {
    Pizza.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, pizza) {
        if (err) return next(err);
        res.send('Pizza Actualizada');
    });
};

exports.pizza_delete = function (req, res) {
    Pizza.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Pizza Eliminada Exitosamente!');
    })
};