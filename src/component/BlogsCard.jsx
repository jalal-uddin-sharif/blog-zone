import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../customHook/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../customHook/useAuth";



const BlogsCard = ({ blogs, setFilter, setSearch}) => {
  const {user} = useAuth()
  const myAxios = useAxiosSecure()
  const handleSearch = (e) =>{
    e.preventDefault()
    const searchText = e.target.search.value;
    setSearch(searchText)

  }
  const handleWishlist = async(blog) =>{
    blog.email = user?.email;
    //challenges
    if (blog._id) {
      blog.id = blog._id;
      delete blog._id;
    }
    const data = await myAxios.post("/wishlist", blog)
    console.log(data.data);
    if(data.data.insertedId){
      Swal.fire({
        icon: "success",
        title: "Added to wishlist",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
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
      <div>
      <div className="my-12">
                    <div className="flex justify-center gap-4">
    
                      <div className="w-1/4">
                      <select
                            onChange={e => setFilter(e.target.value)}
                            id="Category"
                            name="Category"

                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected value="" >All blogs</option>
                            <option value="tricks">Tricks</option>
                            <option value="tech_news">Tech News</option>
                            <option value="apps_review">Apps review</option>
                        </select>
                      </div>

                        <div className="w-1/3 relative">
                         <form onSubmit={handleSearch}>
                         <input type="text" name="search" className="w-full rounded-lg py-2" />
                          <button
                            class="px-3 absolute end-1 border py-[8px] mt-1 font-sans text-xs font-bold bg-purple-500 text-center text-white uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-green-400 active:bg-gray-900/20"
                            type="submit">
                            Search
                        </button>
                         </form>
                        </div>
                    </div>
                </div>
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
                    <h1 className="text-blue-600 mb-1">{blog.category}</h1>
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
                  <Button onClick={()=>handleWishlist(blog)} gradientDuoTone="purpleToPink">Add to wishlist</Button>

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



