import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "../Components/ErrorPage";
import Brands from "../Pages/Brands";
import BrandsDetails from "../Pages/BrandsDetails";
import Profile from "../Pages/Profile";
import About from "../Pages/About";
import PrivateRoutes from "./PrivateRoutes";
import ResetPass from "../Pages/ResetPass";
import UpdateProfile from "../Pages/UpdateProfile";

  
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement:<ErrorPage/>,
      children:[
        {
           path:'/' ,
           element:<Home/>,
           loader:()=>fetch('/data.json')
        },
        {
          path: '/brands',
          element:<Brands/>,
          loader:()=>fetch('/data.json'),
        },
        {
          path:'/brands/:_id',
          element:<PrivateRoutes><BrandsDetails/></PrivateRoutes>,
          loader:()=>fetch('/data.json')
        },
        {
          path: '/login',
          element:<Login/>
        },
        {
          path: '/reset',
          element:<ResetPass/>
        },
        {
          path: '/register',
          element:<Register/>
        },
        {
          path:'/profile',
          element:<PrivateRoutes> <Profile/></PrivateRoutes>
        },
        {
          path:'update-profile',
          element:<PrivateRoutes><UpdateProfile/></PrivateRoutes>
        },
        {
          path:'/about',
          element:<About/>
        }
      ]
    },
    
  ]);

  export default routes;