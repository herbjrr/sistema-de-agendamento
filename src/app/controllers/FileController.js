import File from "../models/File";

class FileController {
    async store (req, res) {
        const {originalname: name, filename: path} = req.file;

        const file = await File.create({
            name,
            path
        })

        return res.json(file)
    }
}

// exporta como new pois está sendo tratado como class
export default new FileController()