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
        element: <AddBlog/>

      },
      {
        path: "/featured-blogs",
        element: <FeaturedBlogs/>

      },
      {
        path: "/wishlist",
        element: <Wishlist/>

      },
      {
        path: "/register",
        element: <Register/>

      },
      {
        path: "/login",
        element: <Login/>

      },
    ]
  },
]);