// const express = require('express');
// const routes = require('./router');
import express from 'express';
import path from 'path';
import routes from './routes';


class App{
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    // cadeia de responsabilidades = middleware
    middlewares() {
        // .json = utiliza o formato json
        this.server.use(express.json());
        this.server.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')))
    }

    routes() {
        this.server.use(routes);
    }
}

// module.exports = new App().server;
export default new App().server;