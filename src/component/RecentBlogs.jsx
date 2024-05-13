import { Button } from "flowbite-react";
import useAxiosSecure from "../customHook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const RecentBlogs = () => {
    const myAxios = useAxiosSecure()

    const { data } = useQuery({
        queryFn: ()=> getData(),
        queryKey: ['recentblogs']
    })
    console.log(data);
    const getData = async () => {
        const data = await myAxios("/recent-blogs")
        return data.data
    }
    return (
        <div className="container mx-auto">
            <div>
                <h1 className="border-l-2 text-2xl px-2 border-green-700 my-4">Recent Blogs</h1>
            </div>
            <div className=" mx-auto sm:max-w-xl md:max-w-full  md: lg:px- lg:">
                <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    <div className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white rounded shadow-sm">
                        <img
                            src="https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            className="object-cover w-full h-72"
                            alt=""
                        />
                        <div className="p-5 border border-t-0">
                            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                                <a
                                    href="/"
                                    className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                                    aria-label="Category"
                                    title="traveling"
                                >
                                    traveling
                                </a>
                                <span className="text-gray-600">— 28 Dec 2020</span>
                            </p>
                            <a
                                href="/"
                                aria-label="Category"
                                title="Visit the East"
                                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                Visit the East
                            </a>
                            <p className="mb-2 text-gray-700">
                                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                                consequuntur magni voluptatem doloremque.
                            </p>
                            <div className="flex gap-10">
                                <Button gradientDuoTone="greenToBlue">View details</Button>
                                <Button gradientDuoTone="purpleToPink">Add to wishlist</Button>
                            </div>

                        </div>
                    </div>
                    <div className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white rounded shadow-sm">
                        <img
                            src="https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            className="object-cover w-full h-72"
                            alt=""
                        />
                        <div className="p-5 border border-t-0">
                            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                                <a
                                    href="/"
                                    className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                                    aria-label="Category"
                                    title="traveling"
                                >
                                    traveling
                                </a>
                                <span className="text-gray-600">— 28 Dec 2020</span>
                            </p>
                            <a
                                href="/"
                                aria-label="Category"
                                title="Visit the East"
                                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                Visit the East
                            </a>
                            <p className="mb-2 text-gray-700">
                                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                                consequuntur magni voluptatem doloremque.
                            </p>
                            <div className="flex gap-10">
                                <Button gradientDuoTone="greenToBlue">View details</Button>
                                <Button gradientDuoTone="purpleToPink">Add to wishlist</Button>
                            </div>

                        </div>
                    </div>
                    <div className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white rounded shadow-sm">
                        <img
                            src="https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            className="object-cover w-full h-72"
                            alt=""
                        />
                        <div className="p-5 border border-t-0">
                            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                                <a
                                    href="/"
                                    className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                                    aria-label="Category"
                                    title="traveling"
                                >
                                    traveling
                                </a>
                                <span className="text-gray-600">— 28 Dec 2020</span>
                            </p>
                            <a
                                href="/"
                                aria-label="Category"
                                title="Visit the East"
                                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                Visit the East
                            </a>
                            <p className="mb-2 text-gray-700">
                                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                                consequuntur magni voluptatem doloremque.
                            </p>
                            <div className="flex gap-10">
                                <Button gradientDuoTone="greenToBlue">View details</Button>
                                <Button gradientDuoTone="purpleToPink">Add to wishlist</Button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentBlogs;