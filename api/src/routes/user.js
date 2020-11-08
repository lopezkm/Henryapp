const router = require('express').Router();
// Importar controladores
const { createUser, getUser } = require('../controllers/userController');


// Rutas del usuario
router.post('/', createUser);
router.get('/:id', getUser);


module.exports = router;