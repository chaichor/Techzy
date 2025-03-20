import express from "express";
import favoritesController from "../controllers/favoritesController.js";

const router = express.Router();

router
    .route("/")
    .get(favoritesController.getFavorites)
    .post(favoritesController.insertFavorites);

router
    .route("/:id")
    .put(favoritesController.updateFavorites)
    .delete(favoritesController.deleteFavorites);

export default router;
