import React, { useEffect, useState } from 'react';

const TopPost = () => {


     const [topPosts, setTopPosts] = useState([])
     // console.log(topPosts)
     useEffect(()=>{
          fetch('https://mzone-server.vercel.app/topposts')
          .then(res => res.json())
          .then(data => {
               setTopPosts(data)
          })
          .catch(err => console.log(err))
     },[topPosts])
     return (
          <div className='border-2 mx-2 sm:mx-5 bg-white rounded-md my-5 pb-2'>
               <h2 className='text-center my-3 font-semibold'> Top Post </h2>
               <div>
                    {
                         topPosts.map( tPost => <div key={tPost?._id}>
                              <div className=' grid grid-cols-3 border-2 p-3 mx-2 my-2 rounded-md bg-base-200'>
                                   <div className=' col-span-1 '>
                                        <img className=' w-20 h-16 ' src={tPost?.postImg} alt="" />
                                   </div>
                                   <div className=' col-span-2'>
                                        <p>{tPost?.postText}</p>
                                        <p className=' text-xs font-light my-1'> {tPost?.postTime.slice(0, 25)}</p>
                                        <div className='flex text-xs'>
                                             <p className='mr-3'> {tPost?.like?.like} like</p>
                                             <p> {tPost?.comment?.comment} comment</p>
                                        </div>
                                   </div>
                              </div>
                         </div>)
                    }
               </div>
          </div>
     );
};

export default TopPost;