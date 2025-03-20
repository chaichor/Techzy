const favoritesController ={};
import favoritesModel from "../models/Favorites.js";

//select 
favoritesController.getFavorites = async (req, res)=>{
    const assessment = await favoritesModel.find().populate("idProduct}").populate("idUser")
    res.json(assessment)
}

//insert
favoritesController.insertFavorites = async (req,res)=>{
    const {idProduct, idUser, amount} = req.body;
    const newFavorites = new favoritesModel({idProduct,idUser,amount});
    await newFavorites.save()
    res.json({message: "Favorites saved"});
}

//delete 
favoritesController.deleteFavorites = async (req, res)=>{
    await favoritesModel.findByIdAndDelete(req.params.id)
    res.json({message: "Favorites deleted"});
}

//update
favoritesController.updateFavorites = async (req, res)=>{
    const {idProduct,idUser,amount}= req.body;
    const updateFavorites = await favoritesModel.findByIdAndUpdate(
        req.params.id,{idProduct,idUser,amount},{new:true}
    )
    res.json({message: "Favorites updated"});
}

export default favoritesController;


