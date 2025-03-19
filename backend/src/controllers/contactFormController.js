import ContactForm from "../models/ContactForm.js";

const contactFormController = {};

// Obtener todos los formularios
contactFormController.getContactForms = async (req, res) => {
    const contactForms = await ContactForm.find();
    res.json(contactForms);
};

// Crear un nuevo formulario
contactFormController.insertContactForm = async (req, res) => {
    const { email, description } = req.body;
    const newContactForm = new ContactForm({ email, description });
    await newContactForm.save();
    res.json({ message: "Contact form saved" });
};

// Eliminar un formulario
contactFormController.deleteContactForm = async (req, res) => {
    await ContactForm.findByIdAndDelete(req.params.id);
    res.json({ message: "Contact form deleted" });
};

// Actualizar un formulario
contactFormController.updateContactForm = async (req, res) => {
    const { email, description } = req.body;
    const updatedContactForm = await ContactForm.findByIdAndUpdate(
        req.params.id, 
        { email, description }, 
        { new: true }
    );
    res.json({ message: "Contact form updated" });
};

export default contactFormController;
