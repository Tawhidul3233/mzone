import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Navbar = () => {

     const { user , logOut} = useContext(AuthContext)

     // user logout
     const handelLogout = ()=>{
          logOut()
          .then(()=>{
               toast.success('Logout successfully')
          })
          .catch(err => console.log(err))
     }

     const navItems = <>
          <li> <Link to='/'> Home Page</Link></li>
          <li> <Link to='/myposts'> My Posts</Link></li>
          <li> <Link to='/about'> About Me</Link></li>
          {
               user?.uid ? <li> <Link onClick={handelLogout}> Log Out</Link></li>
                    :
                    <>
                         <li> <Link to='/register'> Register</Link></li>
                         <li> <Link to='/login'> Login</Link></li>

                    </>
          }
     </>

     return (
          <div>
               <div className="navbar bg-sky-200">
                    <div className="navbar-start">
                         <div className="dropdown">
                              <label tabIndex={0} className="btn btn-ghost btn-circle">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                              </label>
                              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-sky-200 rounded-box w-52">
                                   {navItems}
                              </ul>
                         </div>
                    </div>
                    <div className="navbar-center">
                         <a href=' ' className="btn btn-ghost normal-case text-xl"> Mzone </a>
                    </div>
                    <div className="navbar-end">
                         <button className="btn btn-ghost btn-circle">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                         </button>
                         <button className="btn btn-ghost btn-circle">
                              <div className="indicator">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                   <span className="badge badge-xs badge-primary indicator-item"></span>
                              </div>
                         </button>
                    </div>
               </div>
          </div>
     );
};

export default Navbar;