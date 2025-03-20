import express from "express";
import checkOutController from "../controllers/checkOutController.js";

const router = express.Router();

router
    .route("/")
    .get(checkOutController.getCheckOut)
    .post(checkOutController.insertCheckOut);

router
    .route("/:id")
    .put(checkOutController.updateCheckOut)
    .delete(checkOutController.deleteCheckOut);

export default router;