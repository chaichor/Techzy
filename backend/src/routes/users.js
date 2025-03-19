import express from "express";
import usersController from "../controllers/usersController.js";

const router = express.Router();

router
    .route("/")
    .get(usersController.getUsers)
    .post(usersController.insertUsers);

router
    .route("/:id")
    .put(usersController.updateUsers)
    .delete(usersController.deleteUsers);

export default router;