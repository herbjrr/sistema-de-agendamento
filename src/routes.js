// const { Router } = require('express');
import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import Database from './database/index';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

// rotas do localhost:3333/...

routes.post('/users', UserController.store)
routes.post('/session', SessionController.store)

// rotas autentticadas
routes.use(authMiddleware)
routes.put('/users', UserController.update)

// module.exports = routes;
export default routes;