import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {

     const { register, formState:{errors}, handleSubmit } = useForm();
     const handelRegister = data => {
          console.log(data)
     }

     return (
          <div className=' h-[500px] sm:w-4/5 md:w-3/5 lg:w-2/5 mx-2  my-5 sm:mx-auto flex items-center justify-center border border-info '>
               <div className='w-96 mx-2'>
                    <h2 className='text-2xl font-semibold text-center '> Create an account</h2>
                    <div className="divider w-2/4 mx-auto my-0 mb-4"></div> 
                    <form onSubmit={handleSubmit(handelRegister)}>

                         <div className="form-control w-full  ">
                              <label className="label">
                                   <span className="label-text">What is your name?</span>
                              </label>
                              <input {...register("name")} type="text" placeholder='Full name' className="input input-bordered input-info w-full " />
                         </div>
                         <div className="form-control w-full ">
                              <label className="label">
                                   <span className="label-text">What is your email?</span>
                              </label>
                              <input {...register("email", { required: 'Email is required' })} type="email" placeholder='Your email' className="input input-bordered input-info w-full " />
                              {errors.email && <p className=' text-error' role="alert">{errors.email?.message}</p>}
                         </div>
                         <div className="form-control w-full ">
                              <label className="label">
                                   <span className="label-text">What is your password?</span>
                              </label>
                              <input 
                              {...register("password",
                               {required: 'Password is required',
                              minLength: { value : 6, message: 'Password must 6 characters' }
                              })} 
                              type="password" placeholder='Your password' className="input input-bordered input-info w-full " />
                              {errors.password && <p className=' text-error' role="alert">{errors.password?.message}</p>}
                         </div>
                         
                         <input className='btn btn-info w-full mt-5' type="submit" value='Register' />
                         <div className='my-4'>
                              <p>Already have an account? <Link to='/login' className=' text-info' > Please login </Link> </p>
                         </div>
                    </form>
               </div>
          </div>
     );
};

export default Register;