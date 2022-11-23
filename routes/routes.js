const express = require('express');
const controllers = require('../controllers/controllers');
const router = express.Router()

module.exports = router;


router.post('/post/base', controllers.postBase);


//? Matricería = (Tipo de Shablon) * (Cantidad Colores) // el tipo de shablon lo obtenemos con /api/get/shablon/:id y lo multiplicamos por lo que diga el usuario.
//METODO GET de shablon 
// router.get('/get/shablon/:condicion', controllers.getShablon)
// //METODO GET de la prenda
// router.get('/get/claro/:tipo', controllers.getTipoClaro)
// router.get('/get/oscuro/:tipo', controllers.getTipoOscuro)
// router.get('/get/pintura/:nombre', controllers.getPintura)

//?  USD POR PRENDA:
//? IF( PINTURA elegida por usuario == CLARA): { usamos coleccion pinturaClaro -> (y el tipo de pintura elegida)} / (Prendas fondo claro osea 250 * TamañoEstampaClaro)
//? OSEA QUE TENGO QUE CREAR UN MODELO DONDE GUARDE TamañoEstampaClaro donde guardo 3 valores ( Central: *1) ( Logo: *3.6) ( Full: /6.25 ) 
//? IF( PINTURA elegida por usuario == OSCURO): { usamos coleccion pinturaOscuro -> (y el tipo de pintura elegida)} / (Prendas fondo oscuro osea 190 * TamañoEstampaOscuro)
//? OSEA QUE TENGO QUE CREAR UN MODELO DONDE GUARDE TamañoEstampaOscuro donde guardo 3 valores ( Central: *1) ( Logo: *2.8) ( Full: /5.75 ) 


//UPDATE PRECIO SHABLON
// router.patch('/updateShablon/:condicion', controllers.updateShablon)
// //UPDATE PRECIO PRENDA 
// router.patch('/updatePintura/:nombre', controllers.updatePintura)

// //UPDATE CLARO
// router.get('/updateClaro/:claro', controllers.updateClaro)
// //UPDATE OSCURO
// router.get('/updateOscuro/:oscuro', controllers.updateOscuro)




