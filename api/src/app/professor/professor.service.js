const BaseService = require('../shared/base.service');
const ProfessorRepositoryService = require("../../repositories/services/professor.repository.service");
const ProfessorFactory = require('./professor.factory');

class ProfessorService extends BaseService {
    constructor() {
        super();
    }

    async listar() {
        const salas = await ProfessorRepositoryService.listarTodos();

        if (Array.isArray(salas) && salas.length) {
            this.resultService.content = salas;
        } else {
            this.resultService.addNotFoundError("Nenhum professor foi encontrado!");
        }

        return this.resultService;
    }

    async buscarPorId(id) {
        const professor = await ProfessorRepositoryService.buscarPorId(id);

        if (professor) {
            this.resultService.content = professor;
        } else {
            this.resultService.addNotFoundError("Professor não encontrado!");
        }

        return this.resultService;
    }

    async buscarPorUuid(uuid) {
        const professor = await ProfessorRepositoryService.buscarPorUuid(uuid);

        if (professor) {
            this.resultService.content = professor;
        } else {
            this.resultService.addNotFoundError("Professor não encontrado!");
        }

        return this.resultService;
    }

    async cadastrar(professorViewModel) {
        const dadosParaCriacao = ProfessorFactory.obterDadosParaCriacao(professorViewModel);
        if (dadosParaCriacao) {
            const repositoryResult = await ProfessorRepositoryService.cadastrar(dadosParaCriacao);
            if (repositoryResult) {
                this.resultService.content = repositoryResult['dataValues'];
            }
        } else {
            this.resultService.addBadRequestError("Informe os dados do professor!");
        }

        return this.resultService;
    }

    async atualizar(id, professorViewModel) {
        const professor = await ProfessorRepositoryService.buscarPorId(id);
        if (professor) {
            const dadosParaAtualizacao = ProfessorFactory.obterDadosParaAtualizacao(professor, professorViewModel);

            if (dadosParaAtualizacao) {
                const repositoryResult = await ProfessorRepositoryService.atualizar(id, dadosParaAtualizacao);

                if (repositoryResult && Array.isArray(repositoryResult) && repositoryResult[0]) {
                    this.resultService.content = professor;
                }
            } else {
                this.resultService.content = professor;
            }

        } else {
            this.resultService.addNotFoundError("Professor não encontrado!");
        }

        return this.resultService;
    }

    async apagar(id) {
        const professor = await ProfessorRepositoryService.buscarPorId(id);
        if (professor) {
            const repositoryResult = await ProfessorRepositoryService.apagar(id);
            if (repositoryResult) {
                this.resultService.content = professor;
            }
        } else {
            this.resultService.addNotFoundError("Professor não encontrado!");
        }

        return this.resultService;
    }
}

module.exports = ProfessorService;