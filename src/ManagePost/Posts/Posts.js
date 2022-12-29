import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Posts = () => {

     const [posts, setPosts] = useState([])
     const allPost = posts.slice().reverse()

     // console.log(posts)
     useEffect(() => {
          fetch('http://localhost:5000/posts')
               .then(res => res.json())
               .then(data => setPosts(data))
     }, [posts])
     return (
          <div >
               <h1 className=' my-5 mx-1 sm:mx-10 '>New post</h1>
               <div className=' grid items-center'>
               {
                    allPost.map( post => <Post
                    key={post._id}
                    post={post}
                    > 
                    </Post>)
               }
               </div>
          </div>
     );
};

export default Posts;