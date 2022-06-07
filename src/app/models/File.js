import Sequelize, { Model } from 'sequelize';

class File extends Model{
    //método estático
    static init(sequelize) {
        super.init(
            {
            name: Sequelize.STRING,
            path: Sequelize.STRING,
        },  {
            sequelize, /* tableName: 'users' */
            }
        );
        return this;
    }
}

export default File;