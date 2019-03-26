const UsuarioService = require('./usuario.service');
const BadRequestError = require('../shared/erros/BadRequestError');
const InternalServerError = require('../shared/erros/InternalServerError');
const NotFoundError = require('../shared/erros/NotFoundError');

class UsuarioController {
    async listar(req, res) {
        try {
            const resultService = await new UsuarioService().listar();

            if (resultService.isValid() && resultService.content) {
                return res.status(200).json(
                    resultService.content,
                );
            } else if (resultService.hasError()) {
                return res.status(404).json(
                    resultService.getError()
                );
            } else {
                return res.status(404).json(new NotFoundError("Não foi possível listar os usuários."));
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
            const resultService = await new UsuarioService().buscarPorId(id);

            if (resultService.isValid() && resultService.content) {
                return res.status(200).json(
                    resultService.content,
                );
            } else if (resultService.hasError()) {
                return res.status(404).json(
                    resultService.getError()
                );
            } else {
                return res.status(404).json(new NotFoundError("Não foi possível encontrar o usuário."));
            }

        } catch (ex) {
            console.error(ex);
            return res.status(500).json(new InternalServerError(ex));
        }
    }

    async cadastrar(req, res) {
        try {
            const resultService = await new UsuarioService().cadastrar(req.body);

            if (resultService.isValid() && resultService.content) {
                return res.status(201).json(
                    resultService.content,
                );
            } else if (resultService.hasError()) {
                return res.status(400).json(
                    resultService.getError()
                );
            } else {
                return res.status(400).json(new BadRequestError("Não foi possível cadastrar o usuário."));
            }

        } catch (ex) {
            console.error(ex);
            return res.status(500).json(new InternalServerError(ex));
        }
    }

    async atualizar(req, res) {
        const {
            id
        } = req.params;

        try {
            const resultService = await new UsuarioService().atualizar(id, req.body);

            if (resultService.isValid() && resultService.content) {
                return res.status(200).json(
                    resultService.content,
                );
            } else if (resultService.hasError()) {
                return res.status(400).json(
                    resultService.getError()
                );
            } else {
                return res.status(400).json(new BadRequestError("Não foi possível atualizar o usuário."));
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
            const resultService = await new UsuarioService().apagar(id);

            if (resultService.isValid() && resultService.content) {
                return res.status(200).json(
                    resultService.content,
                );
            } else if (resultService.hasError()) {
                return res.status(400).json(
                    resultService.getError()
                );
            } else {
                return res.status(400).json(new BadRequestError("Não foi possível apagar o usuário."));
            }

        } catch (ex) {
            console.error(ex);
            return res.status(500).json(new InternalServerError(ex));
        }
    }
}

module.exports = new UsuarioController();