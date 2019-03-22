const AutenticacaoService = require("./autenticacao.service");

class AutenticacaoController {
    async autenticar(req, res) {
        const {
            email,
            password
        } = req.body;

        try {
            const resultService = await AutenticacaoService.autenticar(email, password);

            if (resultService.isValid()) {
                return res.status(200).json({
                    usuario: resultService.content,
                    token: resultService.content.generateToken()
                });
            } else if (resultService.hasError()) {
                return res.status(400).json(
                    resultService.getError()
                );
            } else {
                return res.status(400).json(
                    "Não foi possível realizar a autenticação, confira os dados informados!"
                );
            }

        } catch (ex) {
            return res.status(500).json(
                "Ocorreu um erro inesperado, tente novamente mais tarde!"
            );
        }
    }
}

module.exports = new AutenticacaoController();