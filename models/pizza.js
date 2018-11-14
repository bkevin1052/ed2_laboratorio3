var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PizzaSchema = new Schema({
    nombre: {type: String},
    descripcion: {type: String},
    ingredientes:{type: Array},
    tipoMasa: {type:String},
    tamanio: {type:String},
    cantidadPorciones: {type:String},
    quesoExtra: {type:String},
});

//EXPORTAR
module.exports = mongoose.model('Pizza', PizzaSchema);