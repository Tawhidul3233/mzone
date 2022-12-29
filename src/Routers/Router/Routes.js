import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main";
import PostDetails from "../../ManagePost/PostDetails/PostDetails";
import Login from "../../ManageUser/Login";
import Register from "../../ManageUser/Register";
import About from "../../Page/About/About";
import Home from "../../Page/Home/Home";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

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
                    path:'/posts/:id',
                    element: <PrivateRouter> <PostDetails> </PostDetails></PrivateRouter>,
                    loader: ({params})=>{
                         return fetch(`http://localhost:5000/posts/${params.id}`)
                    }

               },
               {
                    path:'/about',
                    element: <PrivateRouter> <About> </About> </PrivateRouter>
               },
               {
                    path:'*',
                    element: <p className="text-center my-10 text-xl font-semibold h-screen">Update soon.....</p>
               }
          ]
     }
])