import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import Mainlayout from "../Layout/Mainlayout";
import Career from "../Pages/Career";
import About from "../Pages/About";

import Categorynews from "../Pages/Categorynews";
import Auth from "../Pages/Auth";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import Carddetails from "../Pages/Carddetails";
import Privateroute from "../Private/Privateroute";

 export const router = createBrowserRouter([
    {
      path: "/",
      Component: Mainlayout,
      children:[
        { path: "home", Component: Home },
        { 
            path: "/category/:id",
             Component: Categorynews,
            loader:()=>fetch('/news.json')
         },
      
      ],
    },
    { 
      path: "auth",
       Component: Auth,
       children:[
        { 
          path: "/auth/login",
           Component: Login
        },
        { 
          path: "/auth/register",
           Component: Register
        },
       ]
    },
    { 
      path: "/details/:id",
       element: <Privateroute>
         <Carddetails></Carddetails>
       </Privateroute>,
       loader:()=>fetch('/news.json')
    },
 
    { 
      path: "/about",
       Component: About
    },
      { path: "/career", Component: Career },
    
  ]);