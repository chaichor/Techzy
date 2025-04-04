import dotenv from "dotenv";

//Ejecutamos la libreria para acceder a nuestras variables
dotenv.config();

export const config = {
    db: {
        URI: process.env.DB_URI,
    },
    server: {
        port: process.env.PORT
    },
    JWT: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES
    },
    Admin: {
        email: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD
    }
};