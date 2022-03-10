var express = require("express");
var router = express.Router();

const Users= require('../models/userSchema')

router.put("/:id",async(req,res)=>{
    const id=req.params.id;
    Users.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
    try{data=>{
        res.send(data)
    }
   
    }
    catch(error){
        res.status(500).send({ message : "Error "})
    }
    

})

module.exports= router;