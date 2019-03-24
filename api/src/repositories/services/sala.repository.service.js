const {
    Sala
} = require("../models");

class SalaRepositoryService {
    async listarTodos() {
        return await Sala.findAll({
            order: ['nome']
        });
    }

    async buscarPorId(id) {
        return await Sala.findOne({
            where: {
                id: id
            }
        });
    }

    async cadastrar(sala) {
        return await Sala.create(sala);
    }

    async atualizar(id, dadosParaAtualizacao) {
        return await Sala.update(dadosParaAtualizacao, {
            where: {
                id: id
            }
        });
    }

    async apagar(id) {
        return await Sala.destroy({
            where: {
                id: id
            }
        });
    }
}

module.exports = new SalaRepositoryService();