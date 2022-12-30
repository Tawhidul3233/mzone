import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const About = () => {

     const { user, setLoading } = useContext(AuthContext)

     const { register, formState: { errors }, handleSubmit } = useForm();

     const [userInfo, setUserInfo] = useState()

     
     useEffect(() => {
          fetch(`https://mzone-server.vercel.app/user?email=${user?.email}`)
               .then(res => res.json())
               .then(data => {
                    
                    setUserInfo(data)
               })
     }, [user])



     return (
          <div className='' >
               <div className=' w-full sm:w-4/5 md:w-3/5 lg:w-2/5 mx-auto my-10 border-2 border-info py-5 '>
                    <form>
                         <div className="flex justify-end mx-5   ">
                              <button className='border px-2 py-1'>Edit</button>
                         </div>
                         <div className="form-control w-full  ">
                              <input {...register("name")} defaultValue={userInfo?.displayName} disabled type="text" placeholder='Full name' className="input input-bordered input-info w-full " />
                         </div>
                         <div className="form-control w-full ">
                              <input {...register("email")} defaultValue={userInfo?.email} disabled type="email" placeholder='Your email' className="input input-bordered input-info w-full  " />

                         </div>
                         <div className="form-control w-full ">
                              <input
                                   {...register("phone")}
                                   disabled
                                   type="text" placeholder='Your phone' className="input input-bordered input-info w-full " />
                         </div>
                         
                         <div className="form-control w-full ">
                              <input
                                   {...register("dateOfBirth")}
                                   disabled
                                   type="text" placeholder='Your date of birth ' className="input input-bordered input-info w-full " />
                         </div>
                         <div className="form-control w-full ">
                              <input
                                   {...register("university")}
                                   disabled
                                   type="text" placeholder='Your university' className="input input-bordered input-info w-full " />
                         </div>

                         <div className="form-control w-full ">
                              <input
                                   {...register("address")}
                                   disabled
                                   type="text" placeholder='Your address' className="input input-bordered input-info w-full " />
                         </div>

                    </form>
               </div>
          </div>
     );
};

export default About;