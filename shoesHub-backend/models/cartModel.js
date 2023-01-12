
import mongoose from "mongoose";
const cartSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    productList:[{
        productId:{
            type:mongoose.Schema.ObjectId,
            ref:'product'
        }
    }]
})
const Cart=mongoose.model('cart',cartSchema);
export default Cart