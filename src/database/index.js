import Sequelize from 'sequelize';
import mongoose from 'mongoose';
import User from '../app/models/User';
import File from '../app/models/File';
import Appointment from '../app/models/Appointment';
import databaseConfig from '../config/database';

const models = [User, File, Appointment];

class Database {
    constructor() {
        // o init referenciado será utilizado abaixo
        this.init();
        this.mongo();
    }

    // conexão com o BD
    init() {
        this.connection = new Sequelize(databaseConfig);
        models
            .map(model => model.init(this.connection))
            .map(model => model.associate && model.associate(this.connection.models));
    }

    mongo() {
        this.mongoConnection = mongoose.connect(
            // url copiada do site do mongodb
            'mongodb+srv://sistema-de-agendamento:sistema-de-agendamento@cluster0.gxpz1.mongodb.net/?retryWrites=true&w=majority',
            { useNewUrlParser: true, useUnifiedTopology: true }
        )
    }
}

export default new Database();