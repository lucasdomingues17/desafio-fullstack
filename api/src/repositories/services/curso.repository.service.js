const {
    Curso,
    Sala,
    Professor
} = require("../models");

class CursoRepositoryService {
    async listarTodos() {
        return await Curso.findAll({
            include: [{
                    model: Professor,
                    as: 'professores',
                    attributes: ['id', 'nome'],
                    throuth: {
                        attributes: []
                    }
                },
                {
                    model: Sala,
                    as: 'salas',
                    attributes: ['id', 'nome'],
                    throuth: {
                        attributes: []
                    }
                }
            ],
            order: ['nome']
        });
    }

    async buscarPorId(id) {
        return await Curso.findOne({
            where: {
                id: id
            },
            include: [{
                    model: Professor,
                    as: 'professores',
                    attributes: ['id', 'nome'],
                    throuth: {
                        attributes: []
                    }
                },
                {
                    model: Sala,
                    as: 'salas',
                    attributes: ['id', 'nome'],
                    throuth: {
                        attributes: []
                    }
                }
            ],
        });
    }

    async cadastrar(curso) {
        const {
            professores,
            salas,
            ...dadosCurso
        } = curso;

        const resultCreateCurso = await Curso.create(dadosCurso);

        if (professores && professores.length > 0) {
            resultCreateCurso.setProfessores(professores);
        }

        if (salas && salas.length > 0) {
            resultCreateCurso.setSalas(professores);
        }

        return resultCreateCurso;
    }

    async atualizar(id, dadosParaAtualizacao) {
        const {
            professores,
            salas,
            ...dadosCurso
        } = dadosParaAtualizacao;

        const resultUpdateCurso = await Curso.update(dadosCurso, {
            where: {
                id: id
            }
        });

        if (professores && professores.length > 0) {
            resultUpdateCurso.setProfessores(professores);
        }

        if (salas && salas.length > 0) {
            resultUpdateCurso.setSalas(professores);
        }

        return resultUpdateCurso;
    }

    async apagar(id) {
        return await Curso.destroy({
            where: {
                id: id
            }
        });
    }
}

module.exports = new CursoRepositoryService();