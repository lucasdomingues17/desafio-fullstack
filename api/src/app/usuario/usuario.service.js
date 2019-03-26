const BaseService = require('../shared/base.service');
const UsuarioRepositoryService = require("../../repositories/services/usuario.repository.service");
const UsuarioFactory = require('./usuario.factory');

class UsuarioService extends BaseService {
    constructor() {
        super();
    }

    async listar() {
        const usuarios = await UsuarioRepositoryService.listarTodos();

        if (Array.isArray(usuarios) && usuarios.length) {
            this.resultService.content = usuarios;
        } else {
            this.resultService.addNotFoundError("Nenhum usuário foi encontrado!");
        }

        return this.resultService;
    }

    async buscarPorId(id) {
        const usuario = await UsuarioRepositoryService.buscarPorId(id);

        if (usuario) {
            this.resultService.content = usuario;
        } else {
            this.resultService.addNotFoundError("Usuário não encontrado!");
        }

        return this.resultService;
    }

    async buscarPorUuid(uuid) {
        const usuario = await UsuarioRepositoryService.buscarPorUuid(uuid);

        if (usuario) {
            this.resultService.content = usuario;
        } else {
            this.resultService.addNotFoundError("Usuário não encontrado!");
        }

        return this.resultService;
    }

    async cadastrar(usuarioViewModel) {
        const dadosParaCriacao = UsuarioFactory.obterDadosParaCriacao(usuarioViewModel);
        if (dadosParaCriacao) {
            const repositoryResult = await UsuarioRepositoryService.cadastrar(dadosParaCriacao);
            if (repositoryResult) {
                this.resultService.content = repositoryResult['dataValues'];
            }
        } else {
            this.resultService.addBadRequestError("Informe os dados do usuario!");
        }

        return this.resultService;
    }

    async atualizar(id, usuarioViewModel) {
        const usuario = await UsuarioRepositoryService.buscarPorId(id);
        if (usuario) {
            const dadosParaAtualizacao = UsuarioFactory.obterDadosParaAtualizacao(usuario, usuarioViewModel);

            if (dadosParaAtualizacao) {
                const repositoryResult = await UsuarioRepositoryService.atualizar(id, dadosParaAtualizacao);

                if (repositoryResult && Array.isArray(repositoryResult) && repositoryResult[0]) {
                    this.resultService.content = usuario;
                }
            } else {
                this.resultService.content = usuario;
            }

        } else {
            this.resultService.addNotFoundError("Usuário não encontrado!");
        }

        return this.resultService;
    }

    async apagar(id) {
        const usuario = await UsuarioRepositoryService.buscarPorId(id);
        if (usuario) {
            const repositoryResult = await UsuarioRepositoryService.apagar(id);
            if (repositoryResult) {
                this.resultService.content = usuario;
            }
        } else {
            this.resultService.addNotFoundError("Usuário não encontrado!");
        }

        return this.resultService;
    }
}

module.exports = UsuarioService;