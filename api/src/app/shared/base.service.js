const ResultService = require('./result-service');

class BaseService {
    constructor() {
        this.resultService = new ResultService();
    }

    begin() {
        this.resultService = new ResultService();
    }
}

module.exports = BaseService;