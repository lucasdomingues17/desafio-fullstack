const BaseService = require('../shared/base.service');
const UsuarioRepositoryService = require("../../repositories/services/usuario.repository.service");

class AutenticacaoService extends BaseService {
    async autenticar(email, password) {
        const usuario = await UsuarioRepositoryService.buscarPorEmail(email);

        if (usuario && (await usuario.checkPassword(password))) {
            this.resultService.content = usuario;
        } else if (!usuario) {
            this.resultService.addError("Usuário não encontrado!");
        } else if (!(await usuario.checkPassword(password))) {
            this.resultService.addError("Senha incorreta!");
        }

        return this.resultService;


    }
}

module.exports = new AutenticacaoService();