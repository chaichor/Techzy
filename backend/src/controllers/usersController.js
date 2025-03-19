// Array de funciones del CRUD
const usersController = {};

import usersModel from "../models/Users.js";

// SELECT
usersController.getUsers = async (req, res) => {
    const users = await usersModel.find()
    res.json(users)
};

// INSERT
usersController.insertUsers = async (req, res) => {
    const {firstName, lastName, birthDate, email, password, phoneNumber} = req.body;
    const newUser = new usersModel({firstName, lastName, birthDate, email, password, phoneNumber});
    await newUser.save()
    res.json({message: "user saved"});
};

// DELETE
usersController.deleteUsers = async (req, res) => {
    await usersModel.findByIdAndDelete(req.params.id)
    res.json({message: "user delete"});
};

// UPDATE
usersController.updateUsers = async (req, res) => {
    const {firstName, lastName, birthDate, email, password, phoneNumber} = req.body;
    const updateUsers = await usersModel.findByIdAndUpdate(
        req.params.id, {firstName, lastName, birthDate, email, password, phoneNumber}, {new: true}
    )
    res.json({message: "user updated"});
};

export default usersController;