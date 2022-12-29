import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Context/AuthProvider";
import { toast } from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

     const { loginWithEmail, singInWithGoogle } = useContext(AuthContext)

     const navigate = useNavigate();
     const location = useLocation();
     const from = location.state?.from?.pathname || '/'

     const { register, formState: { errors }, handleSubmit } = useForm();
     const handelLogin = data => {

          loginWithEmail(data.email, data.password)
               .then(result => {
                    const user = result.user;
                    console.log(user)
                    toast.success('Sing in successfully')
                    navigate(from, { replace: true })
               })
               .catch(err => {
                    console.log(err)
                    toast.error('Something wrong try again')
               })
     }

     // sing in with google 

     const provider = new GoogleAuthProvider()
     const handelGoogleLogin = () => {
          singInWithGoogle(provider)
               .then(result => {
                    const user = result.user;
                    console.log(user)
                    toast.success('Sing in successfully')
                    navigate(from, { replace: true })
               })
               .catch(err => console.log(err))
     }
     return (
          <div className=' h-[600px] sm:w-4/5 md:w-3/5 lg:w-2/5 mx-2 my-5 sm:mx-auto flex items-center justify-center border border-info '>
               <div className='w-96 mx-2'>
                    <h2 className='text-2xl font-semibold text-center mt-5 '> Login your account</h2>
                    <div className="divider w-2/4 mx-auto my-0 mb-4"></div>
                    <form onSubmit={handleSubmit(handelLogin)}>

                         <div className="form-control w-full ">
                              <label className="label">
                                   <span className="label-text">What is your email?</span>
                              </label>
                              <input {...register("email")} type="email" placeholder='Your email' className="input input-bordered input-info w-full " />
                         </div>
                         <div className="form-control w-full ">
                              <label className="label">
                                   <span className="label-text">What is your password?</span>
                              </label>
                              <input {...register("password")} type="password" placeholder='Your password' className="input input-bordered input-info w-full " />
                              {errors.password && <p className=' text-error' role="alert">{errors.password?.message}</p>}
                              <label className="label">
                                   <span className="label-text">Forget password?</span>
                              </label>
                         </div>

                         <input className='btn btn-info w-full mt-5' type="submit" value='Login' />
                         <div className='my-4'>
                              <p>If you new user? <Link to='/register' className=' text-info' > Create account </Link> </p>
                         </div>
                         <div className="divider">OR</div>

                    </form>
                    <div>
                         <button onClick={handelGoogleLogin} className='btn btn-outline w-full mb-5 ' > <FaGoogle className='mr-2 text-amber-400' /> Continue With Google</button>
                    </div>
               </div>
          </div>
     );
};

export default Login;