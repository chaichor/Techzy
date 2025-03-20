// Array de funciones del CRUD
const productsController = {};

import productsModel from "../models/Products.js";

// SELECT
productsController.getProducts = async (req, res) => {
    const products = await productsModel.find().populate("idCategory").populate("idBrand")
    res.json(products)
};

// INSERT
productsController.insertProducts = async (req, res) => {
    const {idCategory, idBrand, productName, productDescription, stock, color, img, price} = req.body;
    const newProduct = new productsModel({idCategory, idBrand, productName, productDescription, stock, color, img, price});
    await newProduct.save()
    res.json({message: "product saved"});
};

// DELETE
productsController.deleteProducts = async (req, res) => {
    await productsModel.findByIdAndDelete(req.params.id)
    res.json({message: "product delete"});
};

// UPDATE
productsController.updateProducts = async (req, res) => {
    const {idCategory, idBrand, productName, productDescription, stock, color, img, price} = req.body;
    const updateProducts = await productsModel.findByIdAndUpdate(
        req.params.id, {idCategory, idBrand, productName, productDescription, stock, color, img, price}, {new: true}
    )
    res.json({message: "product updated"});
};

export default productsController;