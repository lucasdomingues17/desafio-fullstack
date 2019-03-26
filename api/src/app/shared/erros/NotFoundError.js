const ApplicationError = require('./ApplicationError');
class NotFoundError extends ApplicationError {
    constructor(message) {
        super(message || 'Recurso não encontrado!');
    }
}
module.exports = NotFoundError;