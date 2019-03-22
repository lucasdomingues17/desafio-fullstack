class CursoController {
    async listar(req, res) {
        return res.json(
            []
        );
    }
}

module.exports = new CursoController();