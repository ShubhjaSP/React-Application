

const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/ArtGallery');


// const {MongoClient}=require("mongodb");
// const url="mongodb://localhost:27017/ArtGallery/ArtList";
// const client=new MongoClient(url);


// async function getData(){
// return await new Promise((resolve,reject)=>{
//     client.connect( (err)=>{
// if(err)
// reject(err);
// const db=client.db("ArtGallery");
// db.collection("Art").find().toArray((err,result)=>{
//     if(err)
// reject(err);
// resolve(result);
// console.log(result);

// });
// });
// });
// }



// module.exports=getData();


