import { createBrowserRouter } from "react-router-dom";
import Roots from "../Roots/Roots";
import Allblogs from "../Pages/Allblogs";
import Home from "../Home/Home";
import AddBlog from "../Pages/AddBlog";
import Wishlist from "../Pages/Wishlist";
import FeaturedBlogs from "../Pages/FeaturedBlogs";
import Error from "../Pages/Error";
import Register from "../Authentication/Register";
import Login from "../Authentication/Login";
import ViewBlog from "../Pages/ViewBlog";
import UpdateBlogs from "../Pages/UpdateBlogs";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-blogs",
        element: <Allblogs />
      },
      {
        path: "/add-blogs",
        element: <PrivateRoute><AddBlog/></PrivateRoute>

      },
      {
        path: "/featured-blogs",
        element: <PrivateRoute><FeaturedBlogs/></PrivateRoute>

      },
      {
        path: "/update-blogs/:id",
        element: <PrivateRoute><UpdateBlogs/></PrivateRoute>

      },
      {
        path: "/wishlist",
        element: <PrivateRoute><Wishlist/></PrivateRoute>

      },
      {
        path: "/register",
        element: <Register/>

      },
      {
        path: "/login",
        element: <Login/>

      },
      {
        path: "/blog/:id",
        element: <ViewBlog/>

      },
    ]
  },
]);