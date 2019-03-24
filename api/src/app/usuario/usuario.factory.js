const FactoryBase = require('../shared/factory-base.factory');

class UsuarioFactory extends FactoryBase {
    constructor() {
        super();

        this.atualizarPropriedadesCadastraveis(['nome', 'email', 'password']);
        this.atualizarPropriedadesAtualizaveis(['nome', 'email', 'password']);
    }
}

module.exports = new UsuarioFactory();