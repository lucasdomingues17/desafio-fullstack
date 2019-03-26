'use strict'


require('dotenv').config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
})

const fs = require('fs');
const glob = require('glob');
const express = require('express');
const compression = require('compression');



class AppController {

    constructor() {
        this.express = express();

        this.express.use(compression());
        this.express.disable('x-powered-by');

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.express.use(express.json());
    }

    routes() {
        glob(__dirname + '/**/*.routing.js', {}, (err, files) => {
            files.forEach(file => {
                this.express.use(require(file));
            });
        })
    }
}

module.exports = new AppController().express;