import { createBrowserRouter } from "react-router-dom";
import Roots from "../Roots/Roots";
import Allblogs from "../Pages/Allblogs";
import Home from "../Home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots />,
      children:[
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/all-blogs",
            element: <Allblogs/>
        }
      ]
    },
  ]);