import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main";
import PostDetails from "../../ManagePost/PostDetails/PostDetails";
import Login from "../../ManageUser/Login";
import Register from "../../ManageUser/Register";
import Home from "../../Page/Home/Home";

export const routes = createBrowserRouter([
     {
          path:'/',
          element: <Main> </Main>,
          children:[
               {
                    path:'/',
                    element: <Home> </Home>
               },
               {
                    path:'/login',
                    element:<Login> </Login>
               },
               {
                    path: '/register',
                    element:<Register> </Register>
               },
               {
                    path:'/postDetails',
                    element: <PostDetails> </PostDetails>
               }
          ]
     }
])