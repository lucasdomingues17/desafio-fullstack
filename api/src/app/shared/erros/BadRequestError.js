const ApplicationError = require('./ApplicationError');
class BadRequestError extends ApplicationError {
    constructor(message, ex) {
        super(message || 'Não foi possível realizar a operação desejada, verifique os dados informados e tente novamente!', ex);
    }
}

module.exports = BadRequestError;