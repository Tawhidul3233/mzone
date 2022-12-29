import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsHandThumbsUp } from "react-icons/bs";

const Post = ({ post }) => {
    

     const [like , setLike] =useState(0)

     const likecount =() => {
         const doLike = like + 1;
         setLike(doLike)
     }

     return (
          <div className='my-2 mx-1  sm:mx-10 border p-3  bg-white rounded-md 
             '>
               <div className='flex'>
                    <div className='flex items-center mr-2'>
                         <img className=' w-8 h-8 sm:w-12 sm:h-12  rounded-3xl' src={post?.photoURL} alt="" />
                    </div>
                    <div className=' '>
                         <p className=' text-sm sm:text-lg'> {post.displayName} </p>
                         <p className=' text-xs'> {post?.postTime}</p>
                    </div>
                    <div className=' ml-auto'>

                         <Link className=' text-info' to= {`/posts/${post._id}`} >details</Link>
                    </div>
               </div>
               <div className='my-5'>
                    <div className='mb-2'>
                         <p> {post.postText} </p>
                    </div>
                    <div className=' flex justify-center w-full '>
                         <img className=' rounded-lg  ' src={post.postImg} alt="" />
                    </div>
               </div>
               <div className='flex justify-around my-5'>
                    <div>
                         <button onClick={likecount} className='flex text-center justify-center items-center text-info'> <BsHandThumbsUp className='mr-2 text-2xl' /> {like} Likes </button>
                    </div>
                    {/* <div>
                         <Link to={`/postDetails/:${post._id}`} > <input className='border px-2 py-1' type="text" name='' placeholder='Write a comment...' /> </Link>
                    </div> */}
                    <div>
                         <Link to={`/posts/${post._id}`} > 
                              <button className='border-0 px-4 py-1 text-info'> Write a comment... </button>
                          </Link>
                    </div>
               </div>
          </div>
     );
};

export default Post;