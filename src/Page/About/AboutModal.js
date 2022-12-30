import React from 'react';
import { useForm } from 'react-hook-form';

const AboutModal = ({ userInfo }) => {

     const { register, formState: { errors }, handleSubmit } = useForm();

     const savChange = data => {

          console.log(data.displayNameme)
     }

     return (
          <div>
               <input type="checkbox" id="my-modal-3" className="modal-toggle" />
               <div className="modal">
                    <div className="modal-box relative">
                         <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                         <div>
                              <form onSubmit={handleSubmit(savChange)}>
                                   <div className="form-control w-full  ">
                                        <input {...register("displayNameme")} defaultValue={userInfo?.displayName}  type="text" placeholder='Full name' className="input input-bordered input-info w-full my-2 " />
                                   </div>
                                   <div className="form-control w-full ">
                                        <input {...register("email")} defaultValue={userInfo?.email}  type="email" placeholder='Your email' className="input input-bordered input-info w-full  " />

                                   </div>
                                   <div className="form-control w-full ">
                                        <input
                                             {...register("phone")}
                                             
                                             type="text" placeholder='Your phone' className="input input-bordered input-info w-full my-2 " />
                                   </div>

                                   <div className="form-control w-full ">
                                        <input
                                             {...register("dateOfBirth")}
                                             
                                             type="text" placeholder='Your date of birth ' className="input input-bordered input-info w-full " />
                                   </div>
                                   <div className="form-control w-full ">
                                        <input
                                             {...register("university")}
                                             
                                             type="text" placeholder='Your university' className="input input-bordered input-info w-full my-2 " />
                                   </div>

                                   <div className="form-control w-full ">
                                        <input
                                             {...register("address")}
                                             
                                             type="text" placeholder='Your address' className="input input-bordered input-info w-full " />
                                   </div>
                                   
                                   <input htmlFor="my-modal-3" className='btn btn-sm my-5' type="submit" value='save' />
                              </form>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default AboutModal;