import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../Context/AuthProvider";

const Register = () => {

     const { registerWithEmail, updateUser, setLoading } = useContext(AuthContext)

     const imgbbKey = process.env.REACT_APP_imgbbKey;
     // const [photoURL, setPhotoURL] = useState()

     const navigate = useNavigate()

     const { register, formState: { errors }, handleSubmit } = useForm();
     
     const handelRegister = data => {

          // register with email and password
          registerWithEmail(data.email, data.password)
               .then(result => {
                    const user = result.user
                    console.log(user)
                    toast.success('User create successfully')
                    navigate('/')

                    // uplode img imgbb and get link and sent data to firebase
                    const image = data.image[0]
                    const formData = new FormData();
                    formData.append('image', image)
                    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgbbKey}`;
                    fetch(url, {
                         method: 'POST',
                         body: formData
                    })
                         .then(res => res.json())
                         .then(imgData => {
                              // setPhotoURL(imgData.data.url)
                              setLoading(true)
                              const userInfo = {
                                   displayName: data.name,
                                   photoURL: imgData.data?.url
                              }
                              // data update on firebase profile
                              updateUser(userInfo)
                                   .then(() => { })
                                   .catch(err => console.log(err))

                              // user information sent to mongodb
                              setLoading(true)
                              const userDetails = {
                                   email: data?.email,
                                   displayName: data?.name,
                                   photoURL: imgData.data?.url,

                              }
                              fetch('http://localhost:5000/users', {
                                   method:'POST',
                                   headers: {
                                        'content-type':'application/json'
                                   },
                                   body: JSON.stringify(userDetails)
                              })
                              .then(res => res.json())
                              .then(data => {
                                   console.log(data)
                              })
                              .catch(err => console.log(err))
                         })
                         .catch(err => console.log(err))


               })
               .catch(err => {
                    console.log(err)
                    toast.error('Something wrong try again')
               })

     }


     return (
          <div className=' h-[600px] sm:w-4/5 md:w-3/5 lg:w-2/5 mx-2  my-5 sm:mx-auto flex items-center justify-center border border-info '>
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
                                        {
                                             required: 'Password is required',
                                             minLength: { value: 6, message: 'Password must 6 characters' }
                                        })}
                                   type="password" placeholder='Your password' className="input input-bordered input-info w-full " />
                              {errors.password && <p className=' text-error' role="alert">{errors.password?.message}</p>}
                         </div>

                         <div className="form-control w-full  ">
                              <label className="label">
                                   <span className="label-text">Your profile photo?</span>
                              </label>

                              <input {...register("image")} type="file" className="file-input file-input-bordered file-input-info w-full " required />

                             
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