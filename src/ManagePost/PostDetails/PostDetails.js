import React, { useContext, useEffect, useState } from 'react';
import { set, useForm } from 'react-hook-form';
import { BsHandThumbsUp } from 'react-icons/bs';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const PostDetails = () => {

     const { user, setLoading } = useContext(AuthContext);
     const post = useLoaderData();

     const {register, handleSubmit, reset } = useForm()

     const [like, setLike] = useState(0)
     const likecount = () => {
          const doLike = like + 1;
          setLike(doLike)
     }


     const commentSubmit = (data)=>{
          console.log(data.comment)
          const commentInfo = {
               displayName: user?.displayName,
               email: user?.email,
               photoURL: user?.photoURL,
               comment: data.comment,
               commentTime: Date(),
               id: post._id
          }
          reset()

          fetch('http://localhost:5000/comment',{
               method:"POST",
               headers:{
                    'content-type':'application/json'
               },
               body: JSON.stringify(commentInfo)
          })
          .then(res => res.json())
          .then(data => {
               console.log(data)
          })
          .catch(err => console.log(err))
     }


     

     useEffect(()=>{
          fetch('http://localhost:5000/comment')
          .then(res => res.json())
          .then(data => {

          })
     },[])



     return (
          <div>
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
                    </div>
                    <div className='my-5'>
                         <div className='mb-2'>
                              <p> {post.postText} </p>
                         </div>
                         <div className=' flex justify-center w-full '>
                              <img className=' rounded-lg  ' src={post.postImg} alt="" />
                         </div>
                    </div>
                    <div className='flex my-5'>
                         <div className=' w-1/4'>
                              <button onClick={likecount} className='flex text-center justify-center items-center text-info'> <BsHandThumbsUp className='mr-2 text-2xl' /> {like} Likes </button>
                         </div>
                         <div>
                              <p className='text-info'>Comments</p>
                         </div>
                    </div>
                    <form onSubmit={handleSubmit(commentSubmit)}>
                         <div className=' mt-4  '>
                              <textarea {...register('comment')} className=" border border-info w-3/6 rounded-md p-2" placeholder="Write a comment..."></textarea>
                         </div>
                         <button className='btn btn-xs sm:btn-sm lg:btn-md btn-info'>Post</button>
                    </form>
               </div>
          </div>
     );
};

export default PostDetails;