// const { Router } = require('express');
import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import Database from './database/index';
import authMiddleware from './app/middlewares/auth';
import multer from 'multer';
import multerConfig from './config/multer';
import FileController from './app/controllers/FileController';

const routes = new Router();
const upload = multer(multerConfig);

// rotas do localhost:3333/...

routes.post('/users', UserController.store)
routes.post('/session', SessionController.store)

// rotas autentticadas
routes.use(authMiddleware)
routes.put('/users', UserController.update)

// upload de arquivos
routes.post('/files', upload.single('file'), FileController.store);

// module.exports = routes;
export default routes;