import Category from "../models/Category.js";

const categoryController = {};

// Obtener todas las categorías
categoryController.getCategories = async (req, res) => {
    const categories = await Category.find();
    res.json(categories);
};

// Crear una nueva categoría
categoryController.insertCategory = async (req, res) => {
    const { categoryName, categoryDescription } = req.body;
    const newCategory = new Category({ categoryName, categoryDescription });
    await newCategory.save();
    res.json({ message: "Category saved" });
};

// Eliminar una categoría
categoryController.deleteCategory = async (req, res) => {
    await Category.findByIdAndDelete(req.params.id);
    res.json({ message: "Category deleted" });
};

// Actualizar una categoría
categoryController.updateCategory = async (req, res) => {
    const { categoryName, categoryDescription } = req.body;
    const updatedCategory = await Category.findByIdAndUpdate(
        req.params.id, 
        { categoryName, categoryDescription }, 
        { new: true }
    );
    res.json({ message: "Category updated" });
};

export default categoryController;
