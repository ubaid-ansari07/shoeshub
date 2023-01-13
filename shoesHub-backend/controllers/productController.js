import Product from "../models/productModel.js";


export const add=async (req,res,next)=>{
   try {
     let arr =[];
     // arr.push(req.files[0].filename);
     // arr.push(req.files[1].filename);
     // arr.push(req.files[2].filename);
     // req.body.newProduct.productImages.push(req.files.filename[0]);
     // req.body.newProduct.productImages.push(req.files.filename[1]);
     // req.body.newProduct.productImages.push(req.files.filename[2]);
     console.log(req.files);
     console.log(arr);
     console.log(req.body);
     const data="";
     //    const data = await Product.create(req.body.newProduct);
        res.status(200).json({status:true,mess:'Product Inserted successfully...',data});
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