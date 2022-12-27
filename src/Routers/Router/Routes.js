import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main";
import Home from "../../Page/Home/Home";

export const routes = createBrowserRouter([
     {
          path:'/',
          element: <Main> </Main>,
          children:[
               {
                    path:'/',
                    element: <Home> </Home>
               }
          ]
     }
])