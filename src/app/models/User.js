import { user } from 'pg/lib/defaults';
import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs/dist/bcrypt';

class User extends Model{
    //método estático
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            // virtual não cria entradas no BD
            password: Sequelize.VIRTUAL,
            password_hash: Sequelize.STRING,
            provider: Sequelize.BOOLEAN,
        },  {
            sequelize, tableName: 'users'
            }
        );

        this.addHook('beforeSave', async user => {
            if ( user.password ) {
                 // padrão de cripto. Acima de 10 pode deixar lento
                user.password_hash = await bcrypt.hash (user.password, 10)
            }
        })

        return this;
    }

    static associate(models) {
        this.belongsTo(models.File, {foreignKey: 'photo_id'})
    }

    checkPassword(password) {
        return bcrypt.compare( password, this.password_hash )
    }
}

export default User;