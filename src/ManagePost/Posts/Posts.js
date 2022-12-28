import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Posts = () => {

     const [posts, setPosts] = useState([])
     const allPost = posts.slice().reverse()

     // console.log(posts)

     useEffect(()=>{
          fetch('http://localhost:5000/posts')
          .then(res => res.json())
          .then(data => setPosts(data))
     },[])
     return (
          <div >
               {
                    allPost.map( post => <Post
                    key={post._id}
                    post={post}
                    > 
                    </Post>)
               }
          </div>
     );
};

export default Posts;