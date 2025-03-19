import Admin from "../models/Admin.js";

const adminController = {};

// Obtener todos los administradores
adminController.getAdmins = async (req, res) => {
    const admins = await Admin.find();
    res.json(admins);
};

// Crear un nuevo administrador
adminController.insertAdmin = async (req, res) => {
    const { name, email, phoneNumber, password } = req.body;
    const newAdmin = new Admin({ name, email, phoneNumber, password });
    await newAdmin.save();
    res.json({ message: "Admin saved" });
};

// Eliminar un administrador
adminController.deleteAdmin = async (req, res) => {
    await Admin.findByIdAndDelete(req.params.id);
    res.json({ message: "Admin deleted" });
};

// Actualizar un administrador
adminController.updateAdmin = async (req, res) => {
    const { name, email, phoneNumber, password } = req.body;
    const updatedAdmin = await Admin.findByIdAndUpdate(
        req.params.id, 
        { name, email, phoneNumber, password }, 
        { new: true }
    );
    res.json({ message: "Admin updated" });
};

export default adminController;
