

import toast  from "react-hot-toast";


export async function usernameValidate(values){
    const errors=varifyUsername({ }, values);

    return errors;
}

export async function passwordValidate(values){
    const errors=varifyPassword({ }, values);

    return errors;
}

export async function resetPassword(values)
{
    const errors=varifyPassword({ }, values);

    if(values.password!== values.confirm_pwd){
        errors.exist=toast.error("Password Not Match..!")
    }
  
    return errors;

}

export async function registerValidate(values)
{
    const errors=varifyUsername({ }, values);
    varifyPassword(errors,values);
    varifyEmail(errors,values)

    return errors;
}


export async function profileValidate(values)
{
    const errors=varifyEmail({}, values);
    return errors;
}

//************************************************* */

function varifyUsername(error={}, values){

    if(!values.username){
        error.username=toast.error("Username Required....!");
    }
    else if(values.username.includes("  ")){
        error.username=toast.error("Invalid Username....!");

    }

}

function varifyPassword(errors={}, values)
{
    const specialChars= "#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

    if(!values.password){
        errors.password=toast.error("Password Required...!")
    }else if(values.password.includes("  ")){
        errors.password=toast.error("Wrong Password....!");
    }else if(values.password.length < 4){
        errors.password=toast.error("Password length must be more than 4....!");
    }else if(!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(values.password)){
        errors.password=toast.error("Password must Capital ,Small, one number,and Special character....!");

    }

    return errors;
}


function varifyEmail(error={}, values)
{

    if(!values.email)
        {
            error.email=toast.error("Email Required...!")
        }else if(values.email.includes(" ")){
            error.email=toast.error("Invalid Email....!")
        }else if(! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)){
            error.email=toast.error("Invalid Email Format....!")
        }

        return error;
}


