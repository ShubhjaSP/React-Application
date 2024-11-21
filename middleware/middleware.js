
const Jwt=require("jsonwebtoken")
 const jwtkey=require("../index")
const middlewareFun=(req,res,next)=>{
if(!req.query.name){
    res.send("please provide name")
}
else if(req.query.name.length<3){
res.send("name should be more than 3 characters")
}
else{
next()
}

};


// const varifyToken=(req,res,next)=>{
//        let result=Jwt.verify(req.headers.token,jwtkey)
// if(result){
//     res.send(result)
//     next()
// }
// else{
// res.send("token is not valid")
// }


// }

module.exports=middlewareFun;
