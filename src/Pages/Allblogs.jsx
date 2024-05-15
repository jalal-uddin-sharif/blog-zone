import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../customHook/useAxiosSecure";
import BlogsCard from "../component/BlogsCard";
import { useState } from "react";


const Allblogs = () => {
    const myAxios = useAxiosSecure()
    const [filter, setFilter] = useState("")
    const [search, setSearch] = useState("")


    // console.log(filter);

    const { data: blogs = [],
        isLoading, } = useQuery({
            queryFn: () => getData(),
            queryKey: ['blogs', filter, search]
        })

    console.log(blogs);

    const getData = async () => {
        const data = await myAxios(`/blogs?category=${filter}&search=${search}`)
        return data.data;
    }

    // window.scrollTo({
    //   top: 0,
    //   behavior: "smooth"
    // });

    return (
        <div className="lg:conainer lg:mx-auto md:container md:mx-auto mx-4">
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
        Explore a world of diverse perspectives and topics with our 'All Blogs' section <br className="lg:block hidden md:block" /> where every post is a unique journey waiting to be discovered.
        </p>
      </div>
            <BlogsCard setFilter={setFilter} blogs={blogs} setSearch={setSearch} isLoading={isLoading}/>
        </div>
    );
};

export default Allblogs;