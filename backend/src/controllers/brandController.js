// Array de funciones del controlador de Brand
const brandController = {};
import Brand from "../models/Brand.js";

//--------------------SELECT---------------------

brandController.getBrands = async (req, res) => {
    const brands = await Brand.find();
    res.json(brands);
};

// ------------------INSERT------------------------

brandController.insertBrand = async (req, res) => {
    const { brandName } = req.body;
    const newBrand = new Brand({ brandName });
    await newBrand.save();
    res.json({ message: "Brand saved" });
};

// ------------------ DELETE -------------------------

brandController.deleteBrand = async (req, res) => {
    await Brand.findByIdAndDelete(req.params.id);
    res.json({ message: "Brand deleted" });
};

// ------------------- UPDATE ------------------------

brandController.updateBrand = async (req, res) => {
    const { brandName } = req.body;
    const updatedBrand = await Brand.findByIdAndUpdate(
        req.params.id, 
        { brandName }, 
        { new: true }
    );
    res.json({ message: "Brand updated" });
};

export default brandController;