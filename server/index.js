import express from 'express';
import Connection from './databases/db.js';
import dotenv from 'dotenv'
import Router from './routes/route.js';
import bodyParser from 'body-parser';
import cors from 'cors'

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server is started at port ${PORT}`));

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static("client/build"));
}


const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD

const URL = process.env.MONGODB_URI || `mongodb+srv://${USERNAME}:${PASSWORD}@blog-site.8uf78hu.mongodb.net/?retryWrites=true&w=majority`;


Connection(URL);