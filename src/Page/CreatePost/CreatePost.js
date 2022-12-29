import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const CreatePost = () => {

     const { user } = useContext(AuthContext)

     const submitPost = (event) => {
          event.preventDefault()
          const form = event.target;
          const postText = form.postText.value;
          console.log(postText)

          const postWords = {
               postText
          }

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
     }


     return (
          <div className='border-2 mx-2 sm:mx-5'>
               <form onSubmit={submitPost}>
                    <div className='flex justify-around mt-3'>
                         <img className=' w-12 h-12  rounded-3xl' src={user?.photoURL} alt="" />

                         <textarea name="postText" id="" className=' w-3/4 border p-1' placeholder='Whats in your mind? '></textarea>
                    </div>
                    <div className=' grid grid-flow-col my-3'>
                         <div>

                         </div>
                         <div className='grid grid-flow-col '>
                              <div>
                                   <label htmlFor="postImg" className=' w-20 sm:w-28 border p-1 sm:px-2 sm:py-1 text-xs sm:text-base flex items-center'>img + </label>
                                   <input type="file" id='postImg' className="file-input file-input-bordered file-input-info hidden " />
                              </div>

                              <input className='btn btn-xs sm:btn-sm btn-info' type="submit" name="post" id="" value='Post' />
                         </div>
                    </div>
               </form>
          </div>
     );
};

export default CreatePost;