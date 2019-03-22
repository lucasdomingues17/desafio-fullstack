const routes = require('express').Router();

const CursoController = require('./curso.controller');

routes.get("/cursos", CursoController.listar);

module.exports = routes;