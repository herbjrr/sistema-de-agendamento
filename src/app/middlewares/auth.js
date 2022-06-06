import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/auth';

export default async (req, res, next) => {
    const authHeaders = req.headers.authorization

    // se não exixtir authHeaders
    if (!authHeaders) {
        //retorne a mensagem
        return res.status(401).json({
            message: 'Para acessar este serviço, é necessário estar logado!'
        })
    }

    const [, token ] = authHeaders.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(token, authConfig.secret);
        req.userId = decoded.Id;
        next();

    } catch (error) {
        return res.status(401).json({
            message: 'Token inválido'
        })
    }
}