const BaseService = require('../shared/base.service');
const SalaRepositoryService = require("../../repositories/services/sala.repository.service");
const SalaFactory = require('./sala.factory');

class SalaService extends BaseService {
    constructor() {
        super();
    }

    async listar() {
        const salas = await SalaRepositoryService.listarTodos();

        if (Array.isArray(salas) && salas.length) {
            this.resultService.content = salas;
        } else {
            this.resultService.addNotFoundError("Nenhuma sala foi encontrada!");
        }

        return this.resultService;
    }

    async buscarPorId(id) {
        const sala = await SalaRepositoryService.buscarPorId(id);

        if (sala) {
            this.resultService.content = sala;
        } else {
            this.resultService.addNotFoundError("Sala não encontrada!");
        }

        return this.resultService;
    }

    async buscarPorUuid(uuid) {
        const sala = await SalaRepositoryService.buscarPorUuid(uuid);

        if (sala) {
            this.resultService.content = sala;
        } else {
            this.resultService.addNotFoundError("Sala não encontrada!");
        }

        return this.resultService;
    }

    async cadastrar(salaViewModel) {
        const dadosParaCriacao = SalaFactory.obterDadosParaCriacao(salaViewModel);
        if (dadosParaCriacao) {
            const repositoryResult = await SalaRepositoryService.cadastrar(dadosParaCriacao);
            if (repositoryResult) {
                this.resultService.content = repositoryResult['dataValues'];
            }
        } else {
            this.resultService.addBadRequestError("Informe os dados do sala!");
        }

        return this.resultService;
    }

    async atualizar(id, salaViewModel) {
        const sala = await SalaRepositoryService.buscarPorId(id);
        if (sala) {
            const dadosParaAtualizacao = SalaFactory.obterDadosParaAtualizacao(sala, salaViewModel);

            if (dadosParaAtualizacao) {
                const repositoryResult = await SalaRepositoryService.atualizar(id, dadosParaAtualizacao);

                if (repositoryResult && Array.isArray(repositoryResult) && repositoryResult[0]) {
                    this.resultService.content = sala;
                }
            } else {
                this.resultService.content = sala;
            }

        } else {
            this.resultService.addNotFoundError("Sala não encontrada!");
        }

        return this.resultService;
    }

    async apagar(id) {
        const sala = await SalaRepositoryService.buscarPorId(id);
        if (sala) {
            const repositoryResult = await SalaRepositoryService.apagar(id);
            if (repositoryResult) {
                this.resultService.content = sala;
            }
        } else {
            this.resultService.addNotFoundError("Sala não encontrada!");
        }

        return this.resultService;
    }
}

module.exports = SalaService;