import React from 'react';
import CreatePost from '../CreatePost/CreatePost';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Post from '../Post/Post';
import TopPost from '../TopPost/TopPost';

const Home = () => {
     return (
          <div>


               <div className=' grid grid-cols-1 md:grid-cols-3 min-h-screen mt-6'>
                    <div className=' col-span-1'>
                         <CreatePost> </CreatePost>
                         <TopPost> </TopPost>
                    </div>
                    <div className=' col-span-2'>
                         <Post></Post>
                    </div>
               </div>


          </div>
     );
};

export default Home;