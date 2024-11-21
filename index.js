const express=require('express');
const cors=require('cors');

const middleware=require('./middleware/middleware');
const Jwt=require("jsonwebtoken")
const jwtkey="secretkey"
 require('./db/config');                                    

const route=express.Router(); //
const user=require("./db/user");
const ArtList=require("./db/ArtList")

const uploadFile=require("./middleware/UploadFileMiddleware")


const app=express();
app.use(express.json());  //to formatting data into json format
app.use(cors());
// app.use(middleware);
// route.use(middleware) for apply particular route


const varifyToken=(req,res,next)=>{
    let token=req.headers["auth"];
    console.log(token);
if(token){
   Jwt.verify(token,jwtkey,(err,valid)=>{
    if(err){
        res.send("Please Provide Valid Token");
    }
    else{
        next();
    }
   })
}
else{
    res.send("Please Add Token with Headers.")
}

 
}

app.post("/refresh ", async (req,res)=>{
    const {auth}=req.body;
    if(!auth){
        res.send("Token Required..")
    }else{
          Jwt.varify(auth,jwtkey,(err,user)=>{
            if(err){
                res.send("Not Valid Token")
            }
            else{
                console.log("user",user)
                const refreshToken=Jwt.sign({userId:user._Id},jwtkey,{expiresIn:"1h"})
                res.send({auth:refreshToken});
            }
          })
    }
})




// app.post("/signup",async (req,resp)=>{
//     let user1 =new user(req.body);
//     let result= await user1.save();
//     result=result.toObject();
//     delete result.password;
//     Jwt.sign({result},jwtkey,{expiresIn:""},(err,token)=>{
//         if(err){
//             resp.send({
//                 result:'somthing went wrong,please try after some time'
//             })

//         }else{
//              resp.send({result,auth:token});
//         }
//     })
//     // resp.send(result);
// });




// app.post("/login", async (req, resp) => {
//     if (req.body.password && req.body.email) {
//         let user1 = await user.findOne(req.body).select("-password");

//         if (user1) {
//             Jwt.sign({ user1 }, jwtkey, { expiresIn: "" }, (err, token) => {
//                 if (err) {
//                     resp.status(500).send({
//                         result: 'something went wrong, please try again later'
//                     });
//                 } else {
//                     resp.send({ user1, auth: token });
//                 }
//             });
//         } else {
//             resp.status(404).send({ result: 'user not found' });
//         }

//     } else {
//         resp.status(400).send({ result: 'user data not found' });
//     }
// });


app.post("/signup", async (req, resp) => {
    let user1 = new user(req.body);
  
    let result = await user1.save();
    result = result.toObject();
    delete result.password;
    
    Jwt.sign({ result }, jwtkey, { expiresIn: "1m" }, (err, token) => {
        if (err) {
            resp.send({
                result: 'something went wrong, please try after some time'
            });
        } else {
            resp.send({ result, auth: token });
        }
    });
});

app.post("/login", async (req, resp) => {
    if (req.body.password && req.body.email) {
        let user1 = await user.findOne(req.body).select("-password");

        if (user1) {
            Jwt.sign({ user1 }, jwtkey, { expiresIn: "1m" }, (err, token) => {
                if (err) {
                    console.error("JWT Sign Error:", err);
                    resp.status(500).send({
                        result: 'something went wrong, please try again later'
                    });
                } else {
                    console.log("Login successful:", { user1, auth: token });
                    resp.send({ user1, auth: token });
                }
            });
        } else {
            resp.status(404).send({ result: 'user not found' });
        }

    } else {
        resp.status(400).send({ result: 'user data not found' });
    }
});


app.post("/addArt", uploadFile, async (req, resp) => {
    // Assuming you're using multer for file upload middleware

    // Accessing file information from req.file
    const filePath = req.file.path; // File path
    console.log(filePath)
    const originalFileName = req.file.originalname; // Original file name

    // Assuming req.body contains other data for ArtList
    const { name, price, category, uid } = req.body;

    // Create a new instance of ArtList including the file path and name
    const art = new ArtList({
        name: name,
        price: price,
        category: category,
        uid: uid,
        path: filePath, // Assuming you have a field in your schema to store file path
        filename: originalFileName // Assuming you have a field in your schema to store file name
    });

    // Save the art object to the database
    try {
        const result = await art.save();
        resp.send(result);
    } catch (error) {
        // Handle any errors that occur during saving
        resp.status(500).send({ error: "An error occurred while saving the art." });
    }
});



app.get("/showArts", async (req, resp) => {
    try {
        // Fetch all arts from the database
        const arts = await ArtList.find();

        if (arts.length > 0) {
            // Map each art object to include the file path
            const artsWithFilePath = arts.map(art => ({
                _id: art._id,
                name: art.name,
                price: art.price,
                category: art.category,
                uid: art.uid,
                path: art.path // Include the file path
            }));

            resp.send(artsWithFilePath); // Send the response with file paths
        } else {
            resp.send({ result: "No List" });
        }
    } catch (error) {
        console.error("Error fetching arts:", error);
        resp.status(500).send({ error: "An error occurred while fetching arts." });
    }
});



app.delete("/deleteArt/:_id",async(req,resp)=>{
    let result=await ArtList.deleteOne(req.params);
   resp.send(result);
})

app.put ("/updateArt/:_id",async(req,resp)=>{
    let result=await ArtList.updateOne(req.params,{$set:req.body})
    resp.send(result);
})



module.exports =jwtkey;



app.listen(3000);

// ***************** Refresh Token *****************
// app.post("/refresh",(req,resp)=>{
//      const {auth}=req.body;
   
//      if(!auth){
//         resp.send("Token Required..")
//      }else{
//         Jwt.varify(auth,jwtkey,(err,user)=>{
//             if(err)
//             {
//              resp.send("Invalid Token..")
//             }else{
//                 console.log(user);
//                 const refreshToken=Jwt.sign({userId:user._id},jwtkey,{expiresIn:'4h'})
//                 resp.send({auth:refreshToken})
//             }
        

//         })
//      }

// })

//**************************** */
// app.get("/",(req,resp)=>{
//     resp.send("App is working now..")
// });

//**************************** */
// const mongoose=require('mongoose');
// const connectDB=async ()=>{
//     mongoose.connect('mongodb://localhost:27017/ArtGallery');
//     const userSchema=new mongoose.Schema({});
//     const user=mongoose.model('Users',userSchema ) ;
//     const data=await user.find();
//     console.log(data);
// }

// connectDB();

//******************* */
