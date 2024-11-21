import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Styles/Username.module.css'
import {Toaster} from 'react-hot-toast';
import {useFormik} from 'formik';
import { resetPassword } from '../Helper/validate';


export default function Reset() {

  const formik=useFormik({

    initialValues:{
      password:'',
      confirm_pwd:''
      
    },
   validate:resetPassword,
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit:async values=>{
      console.log(values)
      
    }

  })
  
  

  return (
    <div className='container mx-auto'>

      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className='flex justify-center items-center h-screen'>
        <div className={styles.glass}>
          <div className='title flex flex-col items-center'>
            <h4 className='text-4xl font-bold'>Reset Password</h4>
              <span className='py-4 text w-2/3 text-center text-gray-500'>
                Please Enter New Password..
                </span> 
          </div>

          <form className='py-20' onSubmit={formik.handleSubmit}>
            

            <div className='textbox flex flex-col items-center gap-5'>
              <input {...formik.getFieldProps('password')} className={styles.textbox} type='text' placeholder='New Password'/>
              <input {...formik.getFieldProps('confirm_pwd')} className={styles.textbox} type='text' placeholder='Repeat Password'/>

              <button type='submit' className={styles.btn}>Reset</button>
            </div>

         
          </form>
        </div>
      </div>
    </div>
  )
}
