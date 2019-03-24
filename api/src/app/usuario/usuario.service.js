const BaseService = require('../shared/base.service');
const UsuarioRepositoryService = require("../../repositories/services/usuario.repository.service");
const UsuarioFactory = require('./usuario.factory');

class UsuarioService extends BaseService {
    constructor() {
        super();
    }

    async listar() {
        super.begin();

        const usuarios = await UsuarioRepositoryService.listarTodos();

        if (Array.isArray(usuarios) && usuarios.length) {
            this.resultService.content = usuarios;
        } else {
            this.resultService.addError("Nenhum usuário foi encontrado!");
        }

        return this.resultService;
    }

    async buscarPorId(id) {
        super.begin();

        const usuario = await UsuarioRepositoryService.buscarPorId(id);

        if (usuario) {
            this.resultService.content = usuario;
        } else {
            this.resultService.addError("Usuário não encontrado!");
        }

        return this.resultService;
    }

    async buscarPorUuid(uuid) {
        super.begin();

        const usuario = await UsuarioRepositoryService.buscarPorUuid(uuid);

        if (usuario) {
            this.resultService.content = usuario;
        } else {
            this.resultService.addError("Usuário não encontrado!");
        }

        return this.resultService;
    }

    async cadastrar(usuarioViewModel) {
        super.begin();

        const dadosParaCriacao = UsuarioFactory.obterDadosParaCriacao(usuarioViewModel);
        if (dadosParaCriacao) {
            const repositoryResult = await UsuarioRepositoryService.cadastrar(dadosParaCriacao);
            if (repositoryResult) {
                this.resultService.content = repositoryResult['dataValues'];
            }
        } else {
            this.resultService.addError("Informe os dados do usuario!");
        }

        return this.resultService;
    }

    async atualizar(id, usuarioViewModel) {
        super.begin();

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
            this.resultService.addError("Usuário não encontrado!");
        }

        return this.resultService;
    }

    async apagar(id) {
        super.begin();

        const usuario = await UsuarioRepositoryService.buscarPorId(id);
        if (usuario) {
            const repositoryResult = await UsuarioRepositoryService.apagar(id);
            if (repositoryResult) {
                this.resultService.content = usuario;
            }
        } else {
            this.resultService.addError("Usuário não encontrado!");
        }

        return this.resultService;
    }
}

module.exports = new UsuarioService();