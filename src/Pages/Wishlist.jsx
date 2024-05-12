import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../customHook/useAxiosSecure";
import useAuth from "../customHook/useAuth";
import { MdOutlineCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


const Wishlist = () => {
    const {user} = useAuth()
    const myAxios = useAxiosSecure()


    const { data: WishlistData = [],
        isLoading, refetch } = useQuery({
            queryFn: () => getData(),
            queryKey: ['WishlistData', user?.email]
        })


    const getData = async () => {
        const data = await myAxios(`/wishlist/${user?.email}`)
        return data.data;
    }

    const handleRemove = async(id) =>{
        console.log(id);
        const data = await myAxios.delete(`/delete-wishlist/${id}`)
        if(data.data.deletedCount > 0){
            refetch()
            return toast.success("Removed from wishlist")
        }
    }

    return (
        <div className="container mx-auto">
            <div className="my-16">
                <h1>Your Wishlisted blogs</h1>
            </div>
            {/* card */}
            {
                WishlistData?.map(data =>(
                            <div key={data._id}  className="grid grid-cols-1 lg:grid-cols-4 gap-5 md:grid-cols-3">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg h-[250px] w-full" src={data.image}  alt="" />
                    </a>
                    <div className="p-5">
                        <a>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                       <div className="flex justify-around">
                       <Link to={`/blog/${data._id}`} className="inline-flex cursor-pointer items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            View details
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </Link>
                       <a onClick={()=>handleRemove(data._id)} className="inline-flex cursor-pointer gap-1 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            remove from list <MdOutlineCancel color="red" size={20}/>
                        </a>
                       </div>
                    </div>
                </div>
            </div>    
                ))
            }

        </div>
    );
};

export default Wishlist;