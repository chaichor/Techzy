const assessmentController ={};
import assessmentModel from "../models/Assessment.js";

//select 

assessmentController.getAssessment = async (req, res)=>{
    const assessment = await assessmentModel.find().populate("idProduct").populate("idUser")
    res.json(assessment)
}

//insert
assessmentController.insertAssessment = async (req,res)=>{
    const {idProduct, idUser, score} = req.body;
    const newAssessment = new assessmentModel({idProduct,idUser,score});
    await newAssessment.save()
    res.json({message: "Assessment saved"});
}

//delete
assessmentController.deleteAssessment = async (req,res) =>{
    await assessmentModel.findByIdAndDelete(req.params.id)
    res.json({message: "Assessment deleted"});
}


//update
assessmentController.updateAssessment = async (req,res) =>{
    const {idProduct,idUser,score} = req.body;
    const updateAssessment = await assessmentModel.findByIdAndUpdate(
        req.params.id,{idProduct,idUser,score},{new:true}
    )
    res.json({message: "Assessment updated"});
}

export default assessmentController;