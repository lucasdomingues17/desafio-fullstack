const routes = require('express').Router();

const AutenticacaoController = require('./autenticacao.controller');

routes.post("/autenticacao/login", AutenticacaoController.autenticar);

module.exports = routes;