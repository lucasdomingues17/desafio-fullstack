const routes = require('express').Router();
const UsuarioController = require('./usuario.controller');
const autenticacaoMiddleware = require('../autenticacao/autenticacao.middleware');

routes.route('/usuarios')
    .get(autenticacaoMiddleware, UsuarioController.listar)
    .post(autenticacaoMiddleware, UsuarioController.cadastrar);

routes.route('/usuarios/:id')
    .delete(autenticacaoMiddleware, UsuarioController.apagar)
    .put(autenticacaoMiddleware, UsuarioController.atualizar)
    .get(autenticacaoMiddleware, UsuarioController.visualizar);

module.exports = routes;