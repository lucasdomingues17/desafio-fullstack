const routes = require('express').Router();
const CursoController = require('./curso.controller');
const autenticacaoMiddleware = require('../autenticacao/autenticacao.middleware');

routes.route('/cursos')
    .get(autenticacaoMiddleware, CursoController.listar)
    .post(autenticacaoMiddleware, CursoController.cadastrar);

routes.route('/cursos/:id')
    .delete(autenticacaoMiddleware, CursoController.apagar)
    .put(autenticacaoMiddleware, CursoController.atualizar)
    .get(autenticacaoMiddleware, CursoController.visualizar);

module.exports = routes;