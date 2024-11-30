import mongoose from "mongoose";

// Note* - we are using this minimize : false because whenever a document is created in mongoDB if there exists a empty object in the schema, it neglects it and does not show it in the document , so if we doesn't want to neglect the empty object then we will have to use this

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
        unique: true,
    },
    password:{
        type:String,
        required: true,
    },
    cartData:{
        type:Object,
        default:{}
    }
},{minimize:false})


const userModel = mongoose.model("user",userSchema)

export default userModel