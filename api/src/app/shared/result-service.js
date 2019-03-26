const BadRequestError = require('./erros/BadRequestError');
const InternalServerError = require('./erros/InternalServerError');
const NotFoundError = require('./erros/NotFoundError');

class ResultService {
    constructor() {
        this.content = null;
        this.errors = [];
    }

    isValid() {
        return this.errors.length <= 0;
    }

    addError(mensagem) {
        // this.errors.push({
        //     message: mensagem
        // });
        this.errors.push(new Error(mensagem));
    }

    addBadRequestError(mensagem) {
        this.errors.push(new BadRequestError(mensagem));
    }

    addNotFoundError(mensagem) {
        this.errors.push(new NotFoundError(mensagem));
    }

    hasError() {
        return this.errors.length > 0;
    }

    getError() {
        if (this.errors.length == 1) {
            return this.errors[0];
        }

        return this.errors;
    }
}

module.exports = ResultService;