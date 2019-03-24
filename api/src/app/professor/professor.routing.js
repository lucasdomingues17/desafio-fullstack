const routes = require('express').Router();
const ProfessorController = require('./professor.controller');
const autenticacaoMiddleware = require('../autenticacao/autenticacao.middleware');

routes.route('/professores')
    .get(autenticacaoMiddleware, ProfessorController.listar)
    .post(autenticacaoMiddleware, ProfessorController.cadastrar);

routes.route('/professores/:id')
    .delete(autenticacaoMiddleware, ProfessorController.apagar)
    .put(autenticacaoMiddleware, ProfessorController.atualizar)
    .get(autenticacaoMiddleware, ProfessorController.visualizar);


module.exports = routes;