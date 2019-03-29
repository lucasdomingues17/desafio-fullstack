const BaseService = require('../shared/base.service');
const UsuarioRepositoryService = require("../../repositories/services/usuario.repository.service");
const BadRequestError = require('../shared/erros/BadRequestError');

class AutenticacaoService extends BaseService {
    async autenticar(email, password) {
        const usuario = await UsuarioRepositoryService.buscarPorEmail(email);

        if (usuario && (await usuario.checkPassword(password))) {
            this.resultService.content = usuario;
        } else if (!usuario) {
            this.resultService.addBadRequestError("Usuário não encontrado!");
        } else if (!(await usuario.checkPassword(password))) {
            this.resultService.addBadRequestError("Senha incorreta!");
        }

        return this.resultService;
    }
}

module.exports = AutenticacaoService;