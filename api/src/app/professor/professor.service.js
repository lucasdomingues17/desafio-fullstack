const BaseService = require('../shared/base.service');
const ProfessorRepositoryService = require("../../repositories/services/professor.repository.service");
const ProfessorFactory = require('./professor.factory');

class ProfessorService extends BaseService {
    constructor() {
        super();
    }

    async listar() {
        super.begin();

        const salas = await ProfessorRepositoryService.listarTodos();

        if (Array.isArray(salas) && salas.length) {
            this.resultService.content = salas;
        } else {
            this.resultService.addError("Nenhum professor foi encontrado!");
        }

        return this.resultService;
    }

    async buscarPorId(id) {
        super.begin();

        const usuario = await ProfessorRepositoryService.buscarPorId(id);

        if (usuario) {
            this.resultService.content = usuario;
        } else {
            this.resultService.addError("Professor não encontrado!");
        }

        return this.resultService;
    }

    async buscarPorUuid(uuid) {
        super.begin();

        const usuario = await ProfessorRepositoryService.buscarPorUuid(uuid);

        if (usuario) {
            this.resultService.content = usuario;
        } else {
            this.resultService.addError("Professor não encontrado!");
        }

        return this.resultService;
    }

    async cadastrar(usuarioViewModel) {
        super.begin();

        const dadosParaCriacao = ProfessorFactory.obterDadosParaCriacao(usuarioViewModel);
        if (dadosParaCriacao) {
            const repositoryResult = await ProfessorRepositoryService.cadastrar(dadosParaCriacao);
            if (repositoryResult) {
                this.resultService.content = repositoryResult['dataValues'];
            }
        } else {
            this.resultService.addError("Informe os dados do professor!");
        }

        return this.resultService;
    }

    async atualizar(id, usuarioViewModel) {
        super.begin();

        const usuario = await ProfessorRepositoryService.buscarPorId(id);
        if (usuario) {
            const dadosParaAtualizacao = ProfessorFactory.obterDadosParaAtualizacao(usuario, usuarioViewModel);

            if (dadosParaAtualizacao) {
                const repositoryResult = await ProfessorRepositoryService.atualizar(id, dadosParaAtualizacao);

                if (repositoryResult && Array.isArray(repositoryResult) && repositoryResult[0]) {
                    this.resultService.content = usuario;
                }
            } else {
                this.resultService.content = usuario;
            }

        } else {
            this.resultService.addError("Professor não encontrado!");
        }

        return this.resultService;
    }

    async apagar(id) {
        super.begin();

        const usuario = await ProfessorRepositoryService.buscarPorId(id);
        if (usuario) {
            const repositoryResult = await ProfessorRepositoryService.apagar(id);
            if (repositoryResult) {
                this.resultService.content = usuario;
            }
        } else {
            this.resultService.addError("Professor não encontrado!");
        }

        return this.resultService;
    }
}

module.exports = new ProfessorService();