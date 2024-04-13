import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Profile from "../pages/Profile/Profile";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import UpdateProfile from "../pages/Profile/UpdateProfile";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ApartmentsDetails from "../pages/Apartments/ApartmentsDetails";
import Blogs from "../pages/Blogs/Blogs";
import BlogDetails from "../pages/Blogs/BlogDetails";
import About from "../pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/apartments_data.json')
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'profile',
        element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
      },
      {
        path: 'update-profile',
        element: <PrivateRoutes><UpdateProfile></UpdateProfile></PrivateRoutes>
      },
      {
        path: 'apartments-details/:id',
        element: <PrivateRoutes><ApartmentsDetails></ApartmentsDetails></PrivateRoutes>,
        loader: () => fetch('/apartments_data.json')
      },
      {
        path: 'blogs',
        element: <PrivateRoutes><Blogs></Blogs></PrivateRoutes>,
        loader: () => fetch('/blogs_data.json')
      },
      {
        path: 'blog-details/:blogId',
        element: <PrivateRoutes><BlogDetails></BlogDetails></PrivateRoutes>,
        loader: () => fetch('/blogs_data.json')
      },
      {
        path: 'about',
        element: <About></About>
      }
    ]
  },
]);

export default router;