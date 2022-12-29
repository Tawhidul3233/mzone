import logo from './logo.svg';
import './App.css';
import Home from './Page/Home/Home';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routers/Router/Routes';
import toast, { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className=" max-w-screen-xl mx-auto bg-base-200 ">
      <RouterProvider router={ routes }> </RouterProvider>
      <Toaster/>
    </div>
  );
}

export default App;
