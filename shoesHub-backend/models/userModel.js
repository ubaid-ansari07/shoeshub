import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email:{
        type:String
    },
    name:{
        type:String
    },
    password:{
        type:String
    }
})
export default User = mongoose.model('user',userSchema);