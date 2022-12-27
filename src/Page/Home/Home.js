import React from 'react';
import CreatePost from '../CreatePost/CreatePost';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Post from '../Post/Post';
import TopPost from '../TopPost/TopPost';

const Home = () => {
     return (
          <div>
               <Navbar> </Navbar>

               <div className=' grid grid-cols-1 md:grid-cols-3 min-h-screen'>
                    <div className=' col-span-1'>
                         <CreatePost> </CreatePost>
                         <TopPost> </TopPost>
                    </div>
                    <div className=' col-span-2'>
                         <Post></Post>
                    </div>
               </div>

               <Footer> </Footer>
          </div>
     );
};

export default Home;