const FactoryBase = require('../shared/factory-base.factory');

class SalaFactory extends FactoryBase {
    constructor() {
        super();

        this.atualizarPropriedadesCadastraveis(['nome']);
        this.atualizarPropriedadesAtualizaveis(['nome']);
    }
}

module.exports = new SalaFactory();