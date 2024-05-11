import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const BlogsCard = ({ blogs }) => {
  return (
    <div className="container mx-auto">
      <div className="mb-10 mt-16 md:mx-auto sm:text-center md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            All blogs
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="7b568941-9ed0-4f49-85a0-5e21ca6c7ad6"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#7b568941-9ed0-4f49-85a0-5e21ca6c7ad6)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Discover</span>
          </span>{' '}
           a Tapestry of Voices: Explore now
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
        Explore a world of diverse perspectives and topics with our 'All Blogs' section, where every post is a unique journey waiting to be discovered.
        </p>
      </div>
      <div className="grid gap-8 row-gap-5 mb-8 w-full lg:grid-cols-4 sm:grid-cols-2">

        {
          blogs?.map(blog => (
            <a key={blog._id}
              aria-label="View Item"
              className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
            >
              <div className="flex flex-col h-full">
                <img
                  src={blog.image}
                  className="object-cover w-full h-48"
                  alt=""
                />
                <div className="flex-grow border border-b-0 ">
                  <div className="p-5">
                    <h6 className="mb-2 font-semibold leading-5">
                      {blog.title}
                    </h6>
                    <p className="text-sm text-gray-900">
                      {blog.shortDescription}
                    </p>
                  </div>
                </div>
                <div className="border text-black border-t-0 text-start flex justify-between px-4 pb-2">

                  <Link to={`/blog/${blog._id}`}><Button gradientDuoTone="greenToBlue">View details</Button></Link>
                  <Button gradientDuoTone="purpleToPink">Add to wishlist</Button>

                </div>

              </div>
            </a>

          ))
        }

      </div>
    </div>
  );
};

export default BlogsCard;



