const {
    Usuario
} = require("../models");

class UsuarioRepositoryService {
    async listarTodos() {
        return await Usuario.findAll({
            order: ['nome']
        });
    }

    async buscarPorId(id) {
        return await Usuario.findOne({
            where: {
                id
            }
        });
    }

    async buscarPorEmail(email) {
        return await Usuario.findOne({
            where: {
                email
            }
        });
    }

    async cadastrar(usuario) {
        return await Usuario.create(usuario);
    }

    async atualizar(id, dadosParaAtualizacao) {
        return await Usuario.update(dadosParaAtualizacao, {
            where: {
                id: id
            }
        });
    }

    async apagar(id) {
        return await Usuario.destroy({
            where: {
                id: id
            }
        });
    }
}

module.exports = new UsuarioRepositoryService();