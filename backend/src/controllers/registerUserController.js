import User from "../models/Users.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import { config } from "../config.js";

const registerUserController = {};

registerUserController.register = async (req, res) => {
  const { firstName, lastName, birthDate, email, password, phoneNumber } = req.body;

  try {
    if (!firstName || !lastName || !birthDate || !email || !password || !phoneNumber) {
      return res.status(400).json({ message: "Faltan campos obligatorios" });
    }

    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({ message: "El usuario ya existe" });
    }

    const passwordHash = await bcryptjs.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      birthDate,
      email,
      password: passwordHash,
      phoneNumber,
    });

    await newUser.save();

    jsonwebtoken.sign(
      { id: newUser._id },
      config.JWT.secret,
      { expiresIn: config.JWT.expiresIn },
      (error, token) => {
        if (error) {
          console.error(error);
          return res.status(500).json({ message: "Error al generar el token" });
        }
        res.cookie("authToken", token, { httpOnly: true });
        res.status(201).json({ message: "Usuario registrado" });
      }
    );

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al registrar usuario" });
  }
};

export default registerUserController;
