import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config();

export const authorization = (request, response, next) => {
    const authHeader = request.headers['authorization'];
    const authToken = authHeader && authHeader.split(' ')[1];

    if (authToken == null) {
        return response.status(401).json({ message: "error: invalid authorization" })
    }

    jwt.verify(authToken, process.env.ACCESS_SECRET_KEY, (error, user) => {
        if (error) {
            return response.status(403).json({ message: error })
        }

        request.user = user;
        next();
    })

}