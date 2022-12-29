import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const CreatePost = () => {

     const { user } = useContext(AuthContext)

     const { register, handleSubmit, reset } = useForm()
     const imgbbKey = process.env.REACT_APP_imgbbKey;

     const navigate = useNavigate()

    
     const submitPost = (data) => {

          if(!user){
               return navigate('/login')
          }

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
                    
                    const postWords = {
                         photoURL: user?.photoURL,
                         displayName: user?.displayName,
                         email: user?.email,
                         postTime: Date(),
                         postText: data.postText,
                         postImg: imgData.data.url
                    }

                    reset()

                    fetch('http://localhost:5000/posts', {
                         method: 'POST',
                         headers: {
                              'content-type': 'application/json'
                         },
                         body: JSON.stringify(postWords)
                    })
                         .then(res => res.json())
                         .then(data => console.log(data))
                         .catch(error => {
                              console.log(error)
                         })
               })



     }

     




     return (
          <div className='border-2 mx-2 sm:mx-5 bg-white rounded-md'>
               <form onSubmit={handleSubmit(submitPost)}>
                    <div className='flex justify-around mt-3'>
                         <img className=' w-12 h-12  rounded-3xl' src={user?.photoURL} alt="" />

                         <textarea {...register('postText')}  id="" className=' w-3/4 border p-1 bg-base-200 border-info rounded-sm' placeholder='Whats in your mind? '></textarea>
                    </div>

                    <div className=' flex w-4/5  ml-auto  my-2'>
                         <div className=' mx-3 '>
                              <label htmlFor="postImg" className=' w-12 sm:w-20 border p-1 sm:px-2 sm:py-1 text-xs sm:text-base flex items-center border-info rounded-md '>img + </label>
                              <input {...register('image')} type="file" id='postImg' className="file-input file-input-bordered file-input-info hidden " />
                         </div>

                         <input className='btn btn-xs sm:btn-sm btn-info' type="submit" name="post" id="" value='Post' />
                    </div>

               </form>
          </div>
     );
};

export default CreatePost;