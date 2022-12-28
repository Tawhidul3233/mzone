import logo from './logo.svg';
import './App.css';
import Home from './Page/Home/Home';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routers/Router/Routes';


function App() {
  return (
    <div className="">
      <RouterProvider router={ routes }> </RouterProvider>
    </div>
  );
}

export default App;
