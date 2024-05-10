import { createBrowserRouter } from "react-router-dom";
import Roots from "../Roots/Roots";
import Allblogs from "../Pages/Allblogs";
import Home from "../Home/Home";
import AddBlog from "../Pages/AddBlog";
import Wishlist from "../Pages/Wishlist";
import FeaturedBlogs from "../Pages/FeaturedBlogs";
import Error from "../Pages/Error";

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
    ]
  },
]);