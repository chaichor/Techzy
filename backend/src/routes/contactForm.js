import express from "express";
import contactFormController from "../controllers/contactFormController.js";

const router = express.Router();

router
    .route("/")
    .get(contactFormController.getContactForms)
    .post(contactFormController.insertContactForm);

router
    .route("/:id")
    .put(contactFormController.updateContactForm)
    .delete(contactFormController.deleteContactForm);

export default router;
