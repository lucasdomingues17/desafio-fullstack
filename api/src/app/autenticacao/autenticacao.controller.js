const AutenticacaoService = require("./autenticacao.service");

const InternalServerError = require('../shared/erros/InternalServerError');
const NotFoundError = require('../shared/erros/NotFoundError');

class AutenticacaoController {
    async autenticar(req, res) {
        const {
            email,
            password
        } = req.body;

        try {
            const resultService = await new AutenticacaoService().autenticar(email, password);

            if (resultService.isValid() && resultService.content) {
                return res.status(200).json({
                    usuario: resultService.content,
                    token: resultService.content.generateToken()
                });
            } else if (resultService.hasError()) {
                return res.status(400).json(
                    resultService.getError()
                );
            } else {
                return res.status(404).json(new NotFoundError("Não foi possível realizar a autenticação, confira os dados informados!"));
            }

        } catch (ex) {
            console.error(ex);
            return res.status(500).json(new InternalServerError(ex));
        }
    }
}

module.exports = new AutenticacaoController();