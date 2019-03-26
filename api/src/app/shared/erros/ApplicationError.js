class ApplicationError extends Error {
    constructor(message, innerError) {
        super();

        Error.captureStackTrace(this, this.constructor);

        this.name = this.constructor.name;

        this.message = message ||
            'Ocorreu um erro inesperado, tente novamente mais tarde!';

        this.innerError = innerError;
    }
}

module.exports = ApplicationError;