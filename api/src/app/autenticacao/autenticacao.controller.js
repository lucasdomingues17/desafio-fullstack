class AutenticacaoController {
    async autenticar(req, res) {
        return res.json({
            user: {},
            token: null
        });
    }
}

module.exports = new AutenticacaoController();