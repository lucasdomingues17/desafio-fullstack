const routes = require('express').Router();
const SalaController = require('./sala.controller');
const autenticacaoMiddleware = require('../autenticacao/autenticacao.middleware');

routes.route('/salas')
    .get(autenticacaoMiddleware, SalaController.listar)
    .post(autenticacaoMiddleware, SalaController.cadastrar);

routes.route('/salas/:id')
    .delete(autenticacaoMiddleware, SalaController.apagar)
    .put(autenticacaoMiddleware, SalaController.atualizar)
    .get(autenticacaoMiddleware, SalaController.visualizar);

module.exports = routes;