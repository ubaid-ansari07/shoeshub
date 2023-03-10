import Product from "../models/productModel.js";


export const add=async (req,res,next)=>{
   try {
     let arr=[];
     for(let i=0;i<req.files.length;i++){
          arr.push(req.files[i].filename);
     }
     req.body.productImages = arr;
     console.log(req.body);
        const data = await Product.create(req.body);
        res.status(200).json({status:true,mess:'Product Inserted successfully...'});
   } catch (error) {
     console.log(error);
        res.status(500).json({status:false,mess:"Oops!... something went wrong"});
   } 
}
export const list=async (req,res,next)=>{
    try {
        const data = await Product.find();
        res.status(200).json({status:true,data})
    } catch (error) {
         res.status(500).json({status:false,mess:"Oops!... something went wrong"});
    } 
 }
 export const edit=async (req,res,next)=>{
     try {
          const id=req.body._id;
          delete req.body._id;
          await Product.updateOne({_id:id},{$set:req.body});
      } catch (error) {
           res.status(500).json({status:false,mess:"Oops!... something went wrong"});
      } 
 }
 export const remove=async (req,res,next)=>{
    try {
        await Product.deleteOne({_id:req.params.id});
        res.status(200).json({status:true,mess:"Product deleted successfully..."});
    } catch (error) {
         res.status(500).json({status:false,mess:"Oops!... something went wrong"});
    } 
 }