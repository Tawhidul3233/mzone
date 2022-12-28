import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
     // console.log(post)
     
     return (
          <div className='my-10 mx-10 border p-3'>
               <div className='flex'>
                    <div className='flex items-center mr-2'>
                         <p>img</p>
                    </div>
                    <div className=' '>
                         <p>Name : </p>
                         <p className=' text-xs'> date or time</p>
                    </div>
                    <div className=' ml-auto'>
                         
                         <Link to='/postDetails' >details</Link>
                    </div>
               </div>
               <div className='my-5'>
                    <div>
                         <p> {post.postText} </p>
                    </div>
                    <div>
                         <p>img</p>
                    </div>
               </div>
               <div className='flex justify-around my-5'>
                    <div>
                         <button> like </button>
                    </div>
                    <div>
                         <Link to='/postDetails'> <input className='border px-2 py-1' type="text" name='' placeholder='Write a comment...' /> </Link>
                    </div>
               </div>
          </div>
     );
};

export default Post;