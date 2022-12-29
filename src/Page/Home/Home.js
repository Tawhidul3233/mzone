import React from 'react';
import Posts from '../../ManagePost/Posts/Posts';
import CreatePost from '../CreatePost/CreatePost';
import TopPost from '../TopPost/TopPost';

const Home = () => {
     return (
          <div>


               <div className=' grid grid-cols-1 md:grid-cols-3 min-h-screen mt-6'>
                    <div className=' col-span-1'>
                         <CreatePost> </CreatePost>
                         <TopPost> </TopPost>
                    </div>
                    <div className=' col-span-2 md:h-screen md:overflow-scroll'>
                         <Posts></Posts>
                    </div>
               </div>


          </div>
     );
};

export default Home;