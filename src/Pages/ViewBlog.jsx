import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../customHook/useAxiosSecure";
import Comments from "../component/Comments";
import useAuth from "../customHook/useAuth";
import Skeleton from "react-loading-skeleton";

const ViewBlog = ({ setFilter }) => {
  const { user } = useAuth();
  const { id } = useParams();
  const myAxios = useAxiosSecure();

  const { data, isLoading } = useQuery({
    queryFn: () => getData(),
    queryKey: ["blog"],
  });

  const { image, title, shortDescription, description, category, email } =
    data || [];

  const getData = async () => {
    const data = await myAxios(`/blog/${id}`);
    return data.data;
  };

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      {isLoading ? (
        <div>
          <Skeleton count={6} className="h-6" />
        </div>
      ) : (
        <div className="grid gap-6 row-gap-10 lg:grid-cols-2 ">
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src={image}
              alt=""
            />
            {email === user?.email && (
              <Link
                to={`/update-blogs/${id}`}
                class="relative inline-flex mt-6 cursor-pointer items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-100 group"
              >
                <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    class="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    class="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                  Update this blog
                </span>
              </Link>
            )}
          </div>

          <div className="flex flex-col  justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none break-all">
                {title}
              </h2>
              <p className="mb-4 text-sm font-bold tracking-widest ">
                Category : <span className="text-pink-600">{category}</span>
              </p>
              <p className="text-base text-gray-700 md:text-lg mb-4">
                {shortDescription}
              </p>
              <hr />
              <p className="text-base text-gray-700 md:text-lg">
                {description}
              </p>
            </div>
          </div>
        </div>
      )}

      <div>
        <Comments id={id} dbEmail={email} />
      </div>
    </div>
  );
};

export default ViewBlog;
