// Array de funciones del CRUD
const checkOutController = {};

import checkOutModel from "../models/CheckOut.js";

// SELECT
checkOutController.getCheckOut = async (req, res) => {
    const checkOut = await checkOutModel.find().populate("idShoppingCart")
    res.json(checkOut)
};

// INSERT
checkOutController.insertCheckOut = async (req, res) => {
    const {idShoppingCart, cardNumber, expirationDate, securityCode, nameOnCard, address, state} = req.body;
    const newcheckOut = new checkOutModel({idShoppingCart, cardNumber, expirationDate, securityCode, nameOnCard, address, state});
    await newcheckOut.save()
    res.json({message: "checkOut saved"});
};

// DELETE
checkOutController.deleteCheckOut = async (req, res) => {
    await checkOutModel.findByIdAndDelete(req.params.id)
    res.json({message: "checkOut delete"});
};

// UPDATE
checkOutController.updateCheckOut = async (req, res) => {
    const {idShoppingCart, cardNumber, expirationDate, securityCode, nameOnCard, address, state} = req.body;
    const updateCheckOut = await checkOutModel.findByIdAndUpdate(
        req.params.id, {idShoppingCart, cardNumber, expirationDate, securityCode, nameOnCard, address, state}, {new: true}
    )
    res.json({message: "checkOut updated"});
};

export default checkOutController;