const FactoryBase = require('../shared/factory-base.factory');

class CursoFactory extends FactoryBase {
    constructor() {
        super();

        this.atualizarPropriedadesCadastraveis(['nome', 'horario_inicio', 'horario_fim', 'professores', 'salas']);
        this.atualizarPropriedadesAtualizaveis(['nome', 'horario_inicio', 'horario_fim', 'professores', 'salas']);
    }
}

module.exports = CursoFactory;