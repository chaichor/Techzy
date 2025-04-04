import UserModel from "../models/Users.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import { config } from "../config.js";

const loginController = {};

loginController.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let userFound;
    let userType;

    // 1. Verificamos si es el administrador
    if (email === config.Admin.email && password === config.Admin.password) {
      userType = "admin";
      userFound = { _id: "admin" }; // No necesitas buscar en DB, ya es válido
    } else {
      // 2. Buscamos en la base de datos de usuarios comunes
      userFound = await UserModel.findOne({ email });
      userType = "user";

      if (!userFound) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }

      // 3. Validamos la contraseña
      const isMatch = await bcryptjs.compare(password, userFound.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Contraseña incorrecta" });
      }
    }

    // Generamos el token JWT
    jsonwebtoken.sign(
      { id: userFound._id, userType },
      config.JWT.secret,
      { expiresIn: config.JWT.expiresIn },
      (error, token) => {
        if (error) {
          console.error(error);
          return res.status(500).json({ message: "Error al generar token" });
        }
        res.cookie("authToken", token, { httpOnly: true });
        res.json({ message: "Login exitoso" });
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export default loginController;
