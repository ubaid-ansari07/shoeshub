import mongoose from "mongoose";

const favoritesSchema = mongoose.Schema({
    productId:{
        type:mongoose.Schema.ObjectId,
        ref:'product'
    }
})
const Favorites = mongoose.model('favorites',favoritesSchema);
export default Favorites;