

const multer=require("multer")
const uploadFile=multer({
    storage:multer.diskStorage({
        destination:"./uploads/",
            filename:function(req,file,cb){

                cb(null,file.fieldname+"-"+Date.now()+".jpg")
}
})
}).single("user_file")

module.exports=uploadFile;