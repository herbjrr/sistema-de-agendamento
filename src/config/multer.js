/* multi-platform data */

import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

export default {
    storage: multer.diskStorage({
        /* sobe dois niveis e entra na pasta 'uploads' */
        destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
        filename: (req, file, cb) => {
            /* cria 10 caracteres aleatorios / gera criptografia */
            crypto.randomBytes(10, (err, res) => {
                if (err) return cd(err);

                return cb(null, res.toString('hex') + extname(file.originalname))
            })
        },
    })
}