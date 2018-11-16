var express = require('express');
var router = express.Router();


var pizza_controller = require('../controllers/pizza');


//TEST
router.get('/test', pizza_controller.test);

//POST
router.post('/create', pizza_controller.pizza_create);

//GET
router.get('/pizza/:id', pizza_controller.pizza_details);

//GET
router.get('/allpizzas', pizza_controller.allpizzas);

//PUT
router.put('/:id/update', pizza_controller.pizza_update);

//DELETE
router.delete('/:id/delete', pizza_controller.pizza_delete);

//TEST
router.get('/JSON/JWT/create', pizza_controller.createJWT);


module.exports = router;