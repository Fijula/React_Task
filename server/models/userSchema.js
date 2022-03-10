const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    // 
    
    img:
    {
        data: Buffer,
        contentType: String
    },
    name: String,
    post:String,
    desc: String,
    created:Date,
    updated:Date,
    active:{
        type:Boolean,
        default:false,
    }
})

// create model
const Users=new mongoose.model("USER",userSchema);

module.exports=Users;