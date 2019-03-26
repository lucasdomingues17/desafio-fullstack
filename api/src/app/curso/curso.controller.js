const CursoService = require('../curso/curso.service');
const BadRequestError = require('../shared/erros/BadRequestError');
const InternalServerError = require('../shared/erros/InternalServerError');
const NotFoundError = require('../shared/erros/NotFoundError');

class CursoController {
    async listar(req, res) {
        try {
            const resultService = await new CursoService().listar();

            if (resultService.isValid() && resultService.content) {
                return res.status(200).json(
                    resultService.content,
                );
            } else if (resultService.hasError()) {
                return res.status(404).json(
                    resultService.getError()
                );
            } else {
                return res.status(404).json(new NotFoundError("Não foi possível listar os cursos."));
            }

        } catch (ex) {
            console.error(ex);
            return res.status(500).json(new InternalServerError(ex));
        }
    }

    async visualizar(req, res) {
        const {
            id
        } = req.params;

        try {
            const resultService = await new CursoService().buscarPorId(id);

            if (resultService.isValid() && resultService.content) {
                return res.status(200).json(
                    resultService.content,
                );
            } else if (resultService.hasError()) {
                return res.status(404).json(
                    resultService.getError()
                );
            } else {
                return res.status(404).json(new NotFoundError("Não foi possível encontrar o curso."));
            }

        } catch (ex) {
            console.error(ex);
            return res.status(500).json(new InternalServerError(ex));
        }
    }

    async cadastrar(req, res) {
        try {
            const resultService = await new CursoService().cadastrar(req.body);

            if (resultService.isValid() && resultService.content) {
                return res.status(201).json(
                    resultService.content,
                );
            } else if (resultService.hasError()) {
                return res.status(400).json(
                    resultService.getError()
                );
            } else {
                return res.status(400).json(new BadRequestError("Não foi possível cadastrar o curso."));
            }
        } catch (ex) {
            return res.status(500).json(new InternalServerError(ex));
        }
    }

    async atualizar(req, res) {
        const {
            id
        } = req.params;

        try {
            const resultService = await new CursoService().atualizar(id, req.body);

            if (resultService.isValid() && resultService.content) {
                return res.status(200).json(
                    resultService.content,
                );
            } else if (resultService.hasError()) {
                return res.status(400).json(
                    resultService.getError()
                );
            } else {
                return res.status(400).json(new BadRequestError("Não foi possível atualizar o curso."));
            }
        } catch (ex) {
            console.error(ex);
            return res.status(500).json(new InternalServerError(ex));
        }
    }

    async apagar(req, res) {
        const {
            id
        } = req.params;

        try {
            const resultService = await new CursoService().apagar(id);

            if (resultService.isValid() && resultService.content) {
                return res.status(200).json(
                    resultService.content,
                );
            } else if (resultService.hasError()) {
                return res.status(400).json(
                    resultService.getError()
                );
            } else {
                return res.status(400).json(new BadRequestError("Não foi possível apagar o curso"));
            }

        } catch (ex) {
            console.error(ex);
            return res.status(500).json(new InternalServerError(ex));
        }
    }
}

module.exports = new CursoController();