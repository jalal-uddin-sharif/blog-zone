import { Button } from "flowbite-react";
import useAxiosSecure from "../customHook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";


const RecentBlogs = () => {
    const myAxios = useAxiosSecure()

    const { data } = useQuery({
        queryFn: () => getData(),
        queryKey: ['recentblogs']
    })
    console.log(data);
    const getData = async () => {
        const data = await myAxios("/recent-blogs")
        return data.data
    }

    const formatDate = (dateTime) => {
        const date = new Date(dateTime)
        const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }
        return date.toLocaleDateString('en-Us', options)
    }
    return (
        <div className="container mx-auto">
            <div>
                <h1 className="border-l-2 text-2xl px-2 border-green-700 my-4">Recent Blogs</h1>
            </div>
            <div className=" mx-auto sm:max-w-xl md:max-w-full  md: lg:px- lg:">
                <div className="grid gap-8 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    {
                        data?.map(blog => (
                            <div key={blog._id} className="overflow-hidden relative hover:shadow-xl border border-red-700 transition-shadow duration-300 bg-white rounded shadow-sm">
                                <div>
                                    <img
                                        src="https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                        className="object-cover w-full h-72"
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
                                            <span className="text-gray-600">— {
                                                formatDate(blog.timestamp)
                                            } </span>
                                        </p>
                                        <a
                                            href="/"
                                            aria-label="Category"
                                            title="Visit the East"
                                            className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                                        >
                                            {blog.title}
                                        </a>
                                        <p className="mb-2 text-gray-700">
                                            {blog.shortDescription}
                                        </p>
                                    </div>
                                    <div className="flex gap-10 absolute bottom-2 justify-around w-full mt-auto ">
                                            <Link to={`/blog/${blog._id}`}><Button gradientDuoTone="greenToBlue"> View Details
                                            </Button></Link>
                                            <Button gradientDuoTone="purpleToPink">Add to wishlist</Button>
                                        </div>
                                </div>
                            </div>

                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default RecentBlogs;