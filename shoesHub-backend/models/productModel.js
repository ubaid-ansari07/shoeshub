import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    brandId:{
        type:mongoose.Schema.ObjectId,
        ref:'brand'
    },
    productName:{
        type:String,
    },
    productPrice:{
        type:Number,
    },
    productQty:{
        type:Number,
    },
    productImages:[],
    productDescription:{
        type:String,
    },
    productSize:[],
    productColor:{
        type:String,
    },
    productDiscount:{
        type:String,
    },
    productOffer:[],
    productComments:[],
    productSold:{
        type:Number,
    },
    date:{
        type:String,
    },
})
const Product = mongoose.model('product',productSchema);
export default Product;