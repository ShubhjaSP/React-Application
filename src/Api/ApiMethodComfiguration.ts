import axios from "axios"



export const ApiMethodIntegration=()=>{

}

const getInitialized=(contentType:any,responseType:any)=>{
    let api=axios.create({
        headers:{
            'Content-Type':'application/json',
            // 'Content-Type':'multipart/form-data',
            'Access-Control-Allow-Origin':'*',
            'Beare-Token':"743262837"
        },
    });
    return api;
};




export const getRequest=(url:any, headers:any)=>{
    return getInitialized('application/json', headers).get(url,headers).catch((error:any)=>{console.log(error)})
};



export const postRequest=(url:any, headers:any)=>{
    return getInitialized('application/json', headers).post(url,headers).catch((error:any)=>{console.log(error)})
};