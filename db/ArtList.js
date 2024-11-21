

const mongoose=require('mongoose');


const artSchema=new mongoose.Schema({
    name:String,
    filename: String,
    path: String,
    price:String,
    category:String,
    userId:String

});

module.exports=mongoose.model("ArtsList", artSchema);