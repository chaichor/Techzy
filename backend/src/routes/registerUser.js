import express from "express";
import registerUserController from "../controllers/registerUserController.js";

const router = express.Router();

router.route("/").post(registerUserController.register);

export default router;