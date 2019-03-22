class ResultService {
    constructor() {
        this.content = null;
        this.errors = [];
    }

    isValid() {
        return this.errors.length <= 0;
    }

    addError(mensagem) {
        this.errors.push(mensagem);
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