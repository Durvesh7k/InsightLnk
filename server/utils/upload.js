import { GridFsStorage } from 'multer-gridfs-storage'
import dotenv from 'dotenv';
import multer from 'multer';


dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL = `mongodb+srv://luffy05:zoroking@blog-site.8uf78hu.mongodb.net/?retryWrites=true&w=majority`;

const storage = new GridFsStorage({
    url: URL,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpeg"];

        if (match.indexOf(file.memeType) === -1) {
            return `${Date.now()}-blog-${file.originalname}`
        }

        return {
            bucketName: 'photos',
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
})


export default multer({storage})