const mongoose=require('mongoose')

const DetailsSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const CredModel=mongoose.model("Details",DetailsSchema)

module.exports=CredModel;