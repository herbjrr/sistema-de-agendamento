// const { Router } = require('express');
import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import FileController from "./app/controllers/FileController";
import CollaboratorController from "./app/controllers/CollaboratorController";
import AppointmentController from "./app/controllers/AppointmentController";
import ScheduleController from "./app/controllers/ScheduleController";

import Database from "./database/index";
import authMiddleware from "./app/middlewares/auth";

const routes = new Router();
const upload = multer(multerConfig);

// rotas do localhost:3333/...

routes.post("/users", UserController.store);
routes.post("/session", SessionController.store);

// rotas autentticadas
routes.use(authMiddleware);
routes.put("/users", UserController.update);

// rota de agendamento
routes.post('/appointments', AppointmentController.store)

// listagem de agendamento
routes.get('/appointments', AppointmentController.index)

// lista de colaboradores
routes.get('/collaborator', CollaboratorController.index)

// listagem de agendamentos colaboradores
routes.get('/schedule', ScheduleController.index)

// upload de arquivos
routes.post("/files", upload.single("file"), FileController.store);

// module.exports = routes;
export default routes;
