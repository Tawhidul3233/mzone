import React from 'react';

const CreatePost = () => {
     return (
          <div className='border-2 mx-2'>
               <div className='flex justify-around mt-8'>
                    {/* <img src="" alt="" /> */}
                    <p> user img</p>
                    <textarea name="" id="" className=' w-3/4 border p-1' placeholder='Whats in your mind? '></textarea>
               </div>
               <div className='flex justify-around my-5'>
                    <div>
                         <label htmlFor="postImg"  className='w-28 border px-2 py-1'>img + video</label>
                         <input type="file" id='postImg' className="file-input file-input-bordered file-input-info hidden " />
                    </div>

                    <button className='btn btn-info'> Post </button>
               </div>
          </div>
     );
};

export default CreatePost;