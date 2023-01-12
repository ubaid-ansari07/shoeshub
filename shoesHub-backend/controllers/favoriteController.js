import Favorites from "../models/favoritesModel.js";


export const add=async (req,res,next)=>{
   try {
        const data = await Favorites.create(req.body.newFavorites);
        res.status(200).json({status:true,mess:'Favorites Inserted successfully...',data});
   } catch (error) {
        res.status(500).json({status:false,mess:"Oops!... something went wrong"});
   } 
}
export const list=async (req,res,next)=>{
    try {
        const data = await Favorites.find().populate({path:'product'});
        res.status(200).json({status:true,data})
    } catch (error) {
         res.status(500).json({status:false,mess:"Oops!... something went wrong"});
    } 
 }
 export const edit=async (req,res,next)=>{
    try {
 
    } catch (error) {
         res.status(500).json({status:false,mess:"Oops!... something went wrong"});
    } 
 }
 export const remove=async (req,res,next)=>{
    try {
        await Favorites.deleteOne({_id:req.params.id});
        res.status(200).json({status:true,mess:"Favorites deleted successfully..."});
    } catch (error) {
         res.status(500).json({status:false,mess:"Oops!... something went wrong"});
    } 
 }