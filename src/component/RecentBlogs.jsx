import { Button } from "flowbite-react";
import useAxiosSecure from "../customHook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link, Navigate, useNavigate } from "react-router-dom";
import useAuth from "../customHook/useAuth";
import useAddWishlist from "../customHook/useAddWishlist";
import { motion } from "framer-motion";
import LoadingSkeleton from "./LoadingSkeleton";

const RecentBlogs = () => {
  const myAxios = useAxiosSecure();
  const { user } = useAuth() || {};
  const { addData } = useAddWishlist();
  const navigate = useNavigate();

  const { data } = useQuery({
    queryFn: () => getData(),
    queryKey: ["recentblogs"],
  });
  const getData = async () => {
    const data = await myAxios("/recent-blogs");
    return data.data;
  };

  const formatDate = (dateTime) => {
    const date = new Date(dateTime);
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    return date.toLocaleDateString("en-Us", options);
  };

  const handleWishlist = (id) => {
    if (!user?.email) {
      return navigate("/login");
    }
    const email = user?.email;
    const listData = { id, email };
    addData(listData);
  };

  const gridSquareVariants = {
    hidden: { opacity: 0, y: -100 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="lg:container lg:mx-auto md:mx-4  mx-4 sm:mx-auto">
      <div>
        <h1 className="border-l-2 text-2xl px-2 border-green-700 my-4">
          Recent Blogs
        </h1>
      </div>
      {data?.length === undefined ? (
        <LoadingSkeleton />
      ) : (
        <div>
          <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 ">
            {data?.map((blog) => (
              <motion.div
                variants={gridSquareVariants}
                key={blog._id}
                className="overflow-hidden relative hover:shadow-xl border  transition-shadow duration-300 bg-white rounded shadow-sm"
              >
                <div>
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    src={blog.image}
                    className="object-cover w-full h-[250px]"
                    alt=""
                  />
                  <div className="p-5 mb-8">
                    <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                      <a
                        href="/"
                        className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                        aria-label="Category"
                        title="traveling"
                      >
                        {blog.category}
                      </a>
                      <span className="text-gray-600">
                        — {formatDate(blog.timestamp)}{" "}
                      </span>
                    </p>
                    <a
                      href="/"
                      aria-label="Category"
                      title="Visit the East"
                      className="inline-block mb-3 text-xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                    >
                      {blog.title}
                    </a>
                    <p className="mb-2 text-gray-700">
                      {blog.shortDescription.slice(0, 100)} ...
                    </p>
                  </div>
                  <div className="flex gap-10 absolute bottom-2 justify-around w-full mt-auto ">
                    <Link to={`/blog/${blog._id}`}>
                      <Button gradientDuoTone="greenToBlue">
                        {" "}
                        View Details
                      </Button>
                    </Link>
                    <Button
                      onClick={() => handleWishlist(blog._id)}
                      gradientDuoTone="purpleToPink"
                    >
                      Add to wishlist
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentBlogs;
