const ApplicationError = require('./ApplicationError');
class BadRequestError extends ApplicationError {
    constructor(ex, message) {
        super(message || 'Ocorreu um erro inesperado, tente novamente mais tarde!', ex);
    }
}
module.exports = BadRequestError;