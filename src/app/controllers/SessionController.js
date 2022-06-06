import jwt from 'jsonwebtoken';
import res from "express/lib/response";
import User from "../models/User";
import authConfig from '../../config/auth';
import * as Yup from 'yup';


class SessionController{
    // req, res são parâmetros obrigatórios
    async store(req, res) {
        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().required(),
        })

        /* se schema não for válido... */
        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({
                message: 'Falha na validação'
            })
        }

        const { email, password } = req.body;

        const user = await User.findOne({
            where: { email }
        })

        if (!user) {
            return res.status(401).json({
                error: 'Usuário não encontrado!'
            })
        }

        if (!(await user.checkPassword(password))) {
            return res.status(401).json({
                error: 'Senha inválida!'
            })
        }

        const { id, name } = user;

        return res.json({
            user: {
                id,
                name,
                email,
            },
            token: jwt.sign({ id }, authConfig.secret, {expiresIn: authConfig.expiresIn}),
        })
    }
}

export default new SessionController();