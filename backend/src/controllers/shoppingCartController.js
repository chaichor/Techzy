// Array de funciones del CRUD
const shoppingCartController = {};

import shoppingCartModel from "../models/ShoppingCart.js";

// SELECT
shoppingCartController.getShoppingCart = async (req, res) => {
    const shoppingCart = await shoppingCartModel.find().populate("idProduct").populate("idUser")
    res.json(shoppingCart)
};

// INSERT
shoppingCartController.insertShoppingCart = async (req, res) => {
    const {idProduct, idUser, amount, total} = req.body;
    const newShoppingCart = new shoppingCartModel({idProduct, idUser, amount, total});
    await newShoppingCart.save()
    res.json({message: "shoppingCart saved"});
};

// DELETE
shoppingCartController.deleteShoppingCart = async (req, res) => {
    await shoppingCartModel.findByIdAndDelete(req.params.id)
    res.json({message: "shoppingCart delete"});
};

// UPDATE
shoppingCartController.updateShoppingCart = async (req, res) => {
    const {idProduct, idUser, amount, total} = req.body;
    const updateShoppingCart = await shoppingCartModel.findByIdAndUpdate(
        req.params.id, {idProduct, idUser, amount, total}, {new: true}
    )
    res.json({message: "shoppingCart updated"});
};

export default shoppingCartController;