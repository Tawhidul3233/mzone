import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsHandThumbsUp } from "react-icons/bs";
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';

const Post = ({ post }) => {

     const { user } = useContext(AuthContext)

     const navigate = useNavigate()


     const likecount = () => {
          if (!user) {
               return navigate('/login')
          }
          const likeInfo = {
               displayName: user?.displayName,
               email: user?.email,
               photoURL: user?.photoURL,
               id: post._id
          }

          const updateLikeToPostDoc = {
               like : eachPostLike.length + 1
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

               // Post like on mongodb like collections
          fetch('https://mzone-server.vercel.app/like', {
               method: "POST",
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(likeInfo)
          })
               .then(res => res.json())
               .then(data => {
                   toast.success('Liked')
               })
               .catch(err => console.log(err))
     }


     // get like collections from mongodb
     const [like, setLike] = useState([])

     useEffect(() => {
          fetch('https://mzone-server.vercel.app/like')
               .then(res => res.json())
               .then(data => {
                    
                    setLike(data)
               })
     }, [like])

     const eachPostLike = like.filter(l => l.id === post._id)


     return (
          <div className='my-2 mx-1  sm:mx-10 border p-3  bg-white rounded-md 
             '>
               <div className='flex'>
                    <div className='flex items-center mr-2'>
                         <img className=' w-8 h-8 sm:w-12 sm:h-12  rounded-3xl' src={post?.photoURL} alt="" />
                    </div>
                    <div className=' '>
                         <p className=' text-sm sm:text-lg'> {post.displayName} </p>
                         <p className=' text-xs'> {post?.postTime.slice(0, 33)}</p>
                    </div>
                    <div className=' ml-auto'>

                         <Link className=' text-info' to={`/posts/${post._id}`} >details</Link>
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
                         <button onClick={likecount} className='flex text-center justify-center items-center text-info'> <BsHandThumbsUp className='mr-2 text-2xl ' /> {eachPostLike.length}  Likes </button>
                    </div>
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