import React, { useContext, useEffect, useState } from 'react';
import { set, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { BsHandThumbsUp } from 'react-icons/bs';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const PostDetails = () => {

     const { user, setLoading } = useContext(AuthContext);
     const post = useLoaderData();
     const navigate = useNavigate()
     const { register, handleSubmit, reset } = useForm()

     const likecount = () => {
          if(!user){
               return navigate('/login')
          }
          const likeInfo = {
               displayName: user?.displayName,
               email: user?.email,
               photoURL: user?.photoURL,
               id: post._id
          }

          const updateLikeToPostDoc = {
               like : eachPostLike.length + 1,
          }
          // update post like amount on each post
          fetch(`https://mzone-server.vercel.app/posts/${post._id}`, {
               method: 'PUT',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(updateLikeToPostDoc)
          })
               .then(res => res.json())
               .then(data => {
                    
               })
               .catch(err => console.log(err))

               // post like
          fetch('https://mzone-server.vercel.app/like',{
               method:"POST",
               headers:{
                    'content-type':'application/json'
               },
               body:JSON.stringify(likeInfo)
          })
          .then(res => res.json())
          .then(data => {
               toast.success('Liked')
          })
          .catch(err => console.log(err))

     }

     // get like
     const [like, setLike] = useState([])
     useEffect(()=>{
          fetch('https://mzone-server.vercel.app/like')
          .then(res => res.json())
          .then(data => {
               
               setLike(data)
          })
     },[like])
     const eachPostLike = like.filter(l => l.id === post._id)


     const commentSubmit = (data) => {
          const commentInfo = {
               displayName: user?.displayName,
               email: user?.email,
               photoURL: user?.photoURL,
               comment: data.comment,
               commentTime: Date(),
               id: post._id
          }
          reset()


          const updateCommentToPostDoc = {
               comment : eachPostComment.length + 1
          }
          // update post like amount on each post
          fetch(`https://mzone-server.vercel.app/comment/${post._id}`, {
               method: 'PUT',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(updateCommentToPostDoc)
          })
               .then(res => res.json())
               .then(data => {
                    
               })
               .catch(err => console.log(err))



               // post comment 
          fetch('https://mzone-server.vercel.app/comment', {
               method: "POST",
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(commentInfo)
          })
               .then(res => res.json())
               .then(data => {
                    toast.success('Comment added')
               })
               .catch(err => console.log(err))
     }


     // get comment 
     const [comments, setComments] = useState([])
     useEffect(() => {
          fetch('https://mzone-server.vercel.app/comment')
               .then(res => res.json())
               .then(data => {
                    setComments(data)
               })
     }, [comments])
     // how many comment each post 
     const eachPostComment = comments.filter( com => com.id === post._id)


     return (
          <div className=' '>
               <div className=' bg-white  my-2 mx-1  sm:mx-10 border p-3   rounded-md 
             '>
                    <div className='flex'>
                         <div className='flex items-center mr-2'>
                              <img className=' w-8 h-8 sm:w-12 sm:h-12  rounded-3xl' src={post?.photoURL} alt="" />
                         </div>
                         <div className=' '>
                              <p className=' text-sm sm:text-lg'> {post.displayName} </p>
                              <p className=' text-xs'> {post?.postTime.slice(0, 33)}</p>
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
                         <div className=' '>
                              <button onClick={likecount} className='flex text-center justify-center items-center text-info'> <BsHandThumbsUp className='mr-2 text-2xl' /> {eachPostLike.length} Likes </button>
                         </div>
                         <div className='ml-2 sm:ml-5'>
                              <p className='text-info'>{eachPostComment.length} Comments</p>
                         </div>
                    </div>
                    <form onSubmit={handleSubmit(commentSubmit)}>
                         <div className=' mt-4  '>
                              <textarea {...register('comment')} className=" border border-info w-full sm:w-9/12 rounded-md p-2" placeholder="Write a comment..."></textarea>
                         </div>
                         <button className='btn btn-xs sm:btn-sm lg:btn-md btn-info'>Post</button>
                    </form>

                    <div className='mt-10'>
                         {
                              comments.slice().reverse().map(com => <div key={com?._id}
                                   className='my-4'
                              >
                                   { 
                                        com.id === post._id  &&
                                        <div className=' flex'>
                                        <div>
                                             <img className=' w-12 rounded-full' src={com?.photoURL} alt="" />
                                        </div>
                                        <div className=' bg-base-200 p-3 rounded-md ml-2 w-5/6 sm:w-2/3'>
                                             <h2 className=' text-md sm:text-xl font-semibold'> {com?.displayName} </h2>
                                             <p className=' text-sm sm:text-base'> {com?.comment} </p>
                                             <p className=' text-xs mt-1 font-light'> {com?.commentTime?.slice(4, 24)} </p>
                                        </div>
                                   </div>
                                   }
                              </div>)
                         }
                    </div>
               </div>

          </div>
     );
};

export default PostDetails;