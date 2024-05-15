import { Button } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import useAxiosSecure from "../customHook/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../customHook/useAuth";
import toast from "react-hot-toast";
import useAddWishlist from "../customHook/useAddWishlist";
import Nodata from "./Nodata";
import LoadingSkeleton from "./LoadingSkeleton";




const BlogsCard = ({ blogs, setFilter, setSearch, isLoading }) => {

  const navigate = useNavigate()
  const { user } = useAuth()
  const myAxios = useAxiosSecure()
  const { addData } = useAddWishlist()
  const handleSearch = (e) => {
    e.preventDefault()
    const searchText = e.target.search.value;
    setSearch(searchText)

  }
  const handleWishlist = async (blog) => {
    if (!user?.email) {
      toast.error("login first")
      return navigate("/login")
    }
    // blog.email = user?.email;
    // //challenges
    if (blog._id) {
      blog.id = blog._id;
      delete blog._id;
    }

    const id = blog.id
    const email = user?.email
    const listData = { id, email }
  
    addData(listData)
  }

  if(isLoading){
    return <LoadingSkeleton/>
  }

 

  return (
    <div className="lg:container lg:mx-auto mx-4">
      <div>
        <div className="my-12">
          <div className="flex lg:flex-row md:flex-row flex-col justify-center gap-4">

            <div className="lg:w-/4 md:w-2/3">
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

            <div className="lg:w-1/3 md:w-2/3 relative">
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
      {
        blogs.length <= 0 ?  <Nodata text={"No data found in for this" }/> :
        
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
                  className="object-cover w-full h-[250px]"
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
                  <Button onClick={() => handleWishlist(blog)} gradientDuoTone="purpleToPink">Add to wishlist</Button>

                </div>

              </div>
            </a>

          ))
        }

      </div>
      }
   
    </div>
  );
};

export default BlogsCard;



