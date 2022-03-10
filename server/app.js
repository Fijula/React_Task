// import dependencies
const dotenv = require("dotenv");
const express = require("express");

const app= express();
const testAPIrouter =require("./routes/testAPI")

// configure ENV file &  require Connection
dotenv.config({path:"./config.env"});
require("./db/conn");
const port=process.env.PORT;

// Require model
const Users= require('./models/userSchema')
// Get data from frontend
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use("/testAPI",testAPIrouter)

// get the data
app.get("/",(req,res)=>{
    res.send();

})

// create a new testimonial
app.post("/testimonial",async(req,res)=>{
    try{
const img= req.body.img;
const name=req.body.name;
const post=req.body.post;
const desc=req.body.desc;
const created=req.body.created;
const updated=req.bode.updated;
const active=req.body.active;

const createUser =new Users({
    img : img,
    name:name,
    post:post,
    desc:desc,
    created:created,
    updated:updated,
    active:active
})
// saving
const create = await createUser.save();
console.log(create);
res.status(200).send("New Testimonial")

}
    catch(error){
res.status(400).send(error);
}}
)

// edit a testimonial
app.put("/:id",async(req,res)=>{
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
// delete a testimonial
app.delete("/:id",async(req,res)=>{
    const id=req.params.id;
    Users.findIdAndDelete(id)
    try{
        const active=req.body.active;

const createUser =new Users({
    active:false
})
// saving
const create = await createUser.save();
        
            res.send({
                message : "deleted successfully!"
            })
        
    }
    catch{
        res.status(500).send({
            message: "Could not delete" 
        });
    }
    });

    




// server
app.listen(3001,()=>{
    console.log("Server is listening  !")
})