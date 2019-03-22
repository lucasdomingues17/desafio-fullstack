const {
    Usuario
} = require("../models");

class UsuarioRepositoryService {

    async buscarPorEmail(email) {
        return Usuario.findOne({
            where: {
                email
            }
        });
    }
}

module.exports = new UsuarioRepositoryService();