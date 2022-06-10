import User from '../models/User';
import File from '../models/File';

class CollaboratorController{
  async index( req, res){

    const collaborator = await User.findAll({
      where: { provider: true },
      // o que será retornado
      attributes: ['id', 'name', 'email', 'photo_id'],
      // informações do photo_id
      include: [{
        model: File,
        as: 'photo',
        attributes: ['name', 'path', 'url']
      }]
    })

    return res.json(collaborator)

  }
}

export default new CollaboratorController();