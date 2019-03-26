const ProfessorService = require('./professor.service');

class ProfessorController {
    async listar(req, res) {
        try {
            const resultService = await ProfessorService.listar();

            if (resultService.isValid() && resultService.content) {
                return res.status(200).json(
                    resultService.content,
                );
            } else if (resultService.hasError()) {
                return res.status(404).json(
                    resultService.getError()
                );
            } else {
                return res.status(404).json({
                    message: "Não foi possível listar os professores."
                });
            }

        } catch (ex) {
            console.error(ex);
            return res.status(500).json({
                message: "Ocorreu um erro inesperado, tente novamente mais tarde!"
            });
        }
    }

    async visualizar(req, res) {
        const {
            id
        } = req.params;

        try {
            const resultService = await ProfessorService.buscarPorId(id);

            if (resultService.isValid() && resultService.content) {
                return res.status(200).json(
                    resultService.content,
                );
            } else if (resultService.hasError()) {
                return res.status(404).json(
                    resultService.getError()
                );
            } else {
                return res.status(404).json({
                    message: "Não foi possível encontrar o professor."
                });
            }

        } catch (ex) {
            console.error(ex);
            return res.status(500).json({
                message: "Ocorreu um erro inesperado, tente novamente mais tarde!"
            });
        }
    }

    async cadastrar(req, res) {
        try {
            const resultService = await ProfessorService.cadastrar(req.body);

            if (resultService.isValid() && resultService.content) {
                return res.status(201).json(
                    resultService.content,
                );
            } else if (resultService.hasError()) {
                return res.status(400).json(
                    resultService.getError()
                );
            } else {
                return res.status(400).json({
                    message: "Não foi possível cadastrar o professor."
                });
            }

        } catch (ex) {
            console.error(ex);
            return res.status(500).json({
                message: "Ocorreu um erro inesperado, tente novamente mais tarde!"
            });
        }
    }

    async atualizar(req, res) {
        const {
            id
        } = req.params;

        try {
            const resultService = await ProfessorService.atualizar(id, req.body);

            if (resultService.isValid() && resultService.content) {
                return res.status(200).json(
                    resultService.content,
                );
            } else if (resultService.hasError()) {
                return res.status(400).json(
                    resultService.getError()
                );
            } else {
                return res.status(400).json({
                    message: "Não foi possível cadastrar o professor."
                });
            }

        } catch (ex) {
            console.error(ex);
            return res.status(500).json({
                message: "Ocorreu um erro inesperado, tente novamente mais tarde!"
            });
        }
    }

    async apagar(req, res) {
        const {
            id
        } = req.params;

        try {
            const resultService = await ProfessorService.apagar(id);

            if (resultService.isValid() && resultService.content) {
                return res.status(200).json(
                    resultService.content,
                );
            } else if (resultService.hasError()) {
                return res.status(400).json(
                    resultService.getError()
                );
            } else {
                return res.status(400).json({
                    message: "Não foi possível apagar o professor"
                });
            }

        } catch (ex) {
            console.error(ex);
            return res.status(500).json({
                message: "Ocorreu um erro inesperado, tente novamente mais tarde!"
            });
        }
    }
}

module.exports = new ProfessorController();