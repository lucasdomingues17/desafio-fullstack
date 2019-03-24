const {
    Professor
} = require("../models");

class ProfesorRepositoryService {
    async listarTodos() {
        return await Professor.findAll({
            order: ['nome']
        });
    }

    async buscarPorId(id) {
        return await Professor.findOne({
            where: {
                id: id
            }
        });
    }

    async cadastrar(professor) {
        return await Professor.create(professor);
    }

    async atualizar(id, dadosParaAtualizacao) {
        return await Professor.update(dadosParaAtualizacao, {
            where: {
                id: id
            }
        });
    }

    async apagar(id) {
        return await Professor.destroy({
            where: {
                id: id
            }
        });
    }
}

module.exports = new ProfesorRepositoryService();