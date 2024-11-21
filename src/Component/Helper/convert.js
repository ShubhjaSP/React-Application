

//image store in base64 format

export default function convertToBase64(file){
    return new Promise((resolve, reject) => {
        const fileReader=new FileReader();
        fileReader.readAsDataURL(file);
        
        fileReader.onload=()=>{
            const base64String=fileReader.result;
            resolve(base64String);
            };

        fileReader.onerror=  (error)=> {
            reject(error);
            };
        
    })
}