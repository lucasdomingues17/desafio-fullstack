const FactoryBase = require('../shared/factory-base.factory');

class ProfessorFactory extends FactoryBase {
    constructor() {
        super();

        this.atualizarPropriedadesCadastraveis(['nome']);
        this.atualizarPropriedadesAtualizaveis(['nome']);
    }
}

module.exports = new ProfessorFactory();