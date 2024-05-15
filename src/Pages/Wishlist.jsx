import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../customHook/useAxiosSecure";
import useAuth from "../customHook/useAuth";
import { MdOutlineCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import Nodata from "../component/Nodata";
import LoadingSkeleton from "../component/LoadingSkeleton";


const Wishlist = () => {
    const [list, setList] = useState([])
    const {user} = useAuth()
    const myAxios = useAxiosSecure()

console.log(list);
    const { data: WishlistData = [],
        isLoading, refetch } = useQuery({
            queryFn: () => getData(),
            queryKey: ['WishlistData', user?.email]
        })

   
   
    const getData = async () => {
        const data = await myAxios(`/wishlist/${user?.email}`)
        // return data.data;
        const dataList = data.data;
        console.log(dataList);
        const ids = dataList.map(async(data) => {
            const dataList = await myAxios(`/blog/${data.id}`)
            return dataList.data
        })
        const updateList = await Promise.all(ids)
        setList(updateList)
    }

    const handleRemove = async(id) =>{
        console.log(id);
        const data = await myAxios.delete(`/delete-wishlist?email=${user?.email}&id=${id}`)
        if(data.data.deletedCount > 0){
            refetch()
            return toast.success("Removed from wishlist")
        }
    }

    console.log(list);

    if(isLoading){
        return <LoadingSkeleton/>
    }
    if(list.length <= 0){
        return <Nodata text={'Your not any blog in you wishlist'} href={"/all-blogs"} buttonName={"Add from blogs"}/>
    }

    return (
        <div className="lg:container lg:mx-auto mx-4">
            <div className="my-16 text-center text-3xl font-semibold text-green-800 flex justify-center">
                <h1 className="border-b-2 pb-2 px-4 border-pink-600">Your Wishlisted blogs</h1>
            </div>
            {/* card */}
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5 ">

            {
                list?.map((data , idx)=>(
                <div key={idx}  className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg h-[250px] w-full" src={data.image}  alt="" />
                    </a>
                    <div className="p-5">
                        <div className="flex">
                        <h1 className="bg-cyan-500 px-2 rounded-lg">
                            {data.category}
                        </h1>
                        </div>
                        <a>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.shortDescription?.slice(0, 100)}</p>
                       <div className="flex justify-around">
                       <Link to={`/blog/${data._id}`} className="inline-flex   cursor-pointer items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
                ))
            }
            </div>    

        </div>
    );
};

export default Wishlist;