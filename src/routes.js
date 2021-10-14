const Express = require('express');

const routes = Express.Router();

const UsuarioController = require('./controller/UsuarioController');
const ServicoController = require('./controller/ServicoController');
const VeiculoController = require('./controller/VeiculoController');

routes.get('/', (req, res) => {
    res.json({ MSG: 'ONL API' });
});

routes.post('/usuario', UsuarioController.insere);
routes.get('/usuario', UsuarioController.ler);
routes.put('/usuario/:id', UsuarioController.altera);
routes.delete('/usuario/:id', UsuarioController.deleta);
routes.post('/usuario/login', UsuarioController.login);







module.exports = routes;