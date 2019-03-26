const BaseService = require('../shared/base.service');
const CursoRepositoryService = require("../../repositories/services/curso.repository.service");
const CursoFactory = require('./curso.factory');

class CursoService extends BaseService {
    async listar() {
        const cursos = await CursoRepositoryService.listarTodos();

        if (Array.isArray(cursos) && cursos.length) {
            this.resultService.content = cursos;
        } else {
            this.resultService.addNotFoundError("Nenhum curso foi encontrado!");
        }

        return this.resultService;
    }

    async buscarPorId(id) {
        const curso = await CursoRepositoryService.buscarPorId(id);

        if (curso) {
            this.resultService.content = curso;
        } else {
            this.resultService.addNotFoundError("Curso não encontrado!");
        }

        return this.resultService;
    }

    async buscarPorUuid(uuid) {
        const curso = await CursoRepositoryService.buscarPorUuid(uuid);

        if (curso) {
            this.resultService.content = curso;
        } else {
            this.resultService.addNotFoundError("Curso não encontrado!");
        }

        return this.resultService;
    }

    async cadastrar(cursoViewModel) {
        const dadosParaCriacao = new CursoFactory().obterDadosParaCriacao(cursoViewModel);
        if (dadosParaCriacao) {
            const repositoryResult = await CursoRepositoryService.cadastrar(dadosParaCriacao);
            if (repositoryResult) {
                this.resultService.content = repositoryResult['dataValues'];
            }
        } else {
            this.resultService.addBadRequestError("Informe os dados do curso!");
        }

        return this.resultService;
    }

    async atualizar(id, cursoViewModel) {
        const curso = await CursoRepositoryService.buscarPorId(id);
        if (curso) {
            const dadosParaAtualizacao = new CursoFactory().obterDadosParaAtualizacao(curso, cursoViewModel);

            if (dadosParaAtualizacao) {
                const repositoryResult = await CursoRepositoryService.atualizar(id, dadosParaAtualizacao);

                if (repositoryResult && Array.isArray(repositoryResult) && repositoryResult[0]) {
                    this.resultService.content = curso;
                }
            } else {
                this.resultService.content = curso;
            }

        } else {
            this.resultService.addNotFoundError("Curso não encontrado!");
        }

        return this.resultService;
    }

    async apagar(id) {
        const curso = await CursoRepositoryService.buscarPorId(id);
        if (curso) {
            const repositoryResult = await CursoRepositoryService.apagar(id);
            if (repositoryResult) {
                this.resultService.content = curso;
            }
        } else {
            this.resultService.addNotFoundError("Curso não encontrado!");
        }

        return this.resultService;
    }
}

module.exports = CursoService;