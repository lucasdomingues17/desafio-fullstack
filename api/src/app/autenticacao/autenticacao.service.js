// import {
//     BaseService
// } from '../shared/base.service';

const BaseService = require('../shared/base.service');

const UsuarioRepositoryService = require("../../repositories/services/usuario.repository.service");

class AutenticacaoService extends BaseService {
    async autenticar(email, password) {
        const usuario = await UsuarioRepositoryService.buscarPorEmail(email);



        if (!usuario) {
            // return res.status(401).json({
            //     message: "Usuário não encontrado"
            // });

            this.resultService.addError("Usuário não encontrado");
            return this.resultService;
        }

        if (!(await usuario.checkPassword(password))) {
            // return res.status(401).json({
            //     message: "Senha incorreta"
            // });
            this.resultServiceaddError("Senha incorreta");
            return this.resultService;
        }

        this.resultService.content = usuario;

        return this.resultService;
    }
}
module.exports = new AutenticacaoService();