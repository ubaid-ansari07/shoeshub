import Brand from "../models/brandModel.js";

export const add=async (req,res,next)=>{
   try {
     console.log(req.body);
        const data = await Brand.create(req.body);
        res.status(200).json({status:true,mess:'Brand Inserted successfully...',data});
   } catch (error) {
        res.status(500).json({status:false,mess:"Oops!... something went wrong"});
   } 
}
export const list=async (req,res,next)=>{
    try {
        const data = await Brand.find();
        res.status(200).json({status:true,result :data})
    } catch (error) {
         res.status(500).json({status:false,mess:"Oops!... something went wrong"});
    } 
 }
 export const edit=async (req,res,next)=>{
    try {
        const id=req.body._id;
        delete req.body._id;
        await Brand.updateOne({_id:id},{$set:req.body});
    } catch (error) {
         res.status(500).json({status:false,mess:"Oops!... something went wrong"});
    } 
 }
 export const remove=async (req,res,next)=>{
    try {
        await Brand.deleteOne({_id:req.params.id});
        res.status(200).json({status:true,mess:"Brand deleted successfully..."});
    } catch (error) {
         res.status(500).json({status:false,mess:"Oops!... something went wrong"});
    } 
 }