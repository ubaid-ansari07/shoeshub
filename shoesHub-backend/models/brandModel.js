import mongoose from "mongoose";

const brandSchema = mongoose.Schema({
    brandName:{
        type:String
    }
})
const Brand = mongoose.model('brand',brandSchema);
export default Brand;