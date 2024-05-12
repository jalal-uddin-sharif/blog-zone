import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../customHook/useAxiosSecure";
import Comments from "../component/Comments";

const ViewBlog = ({setFilter}) => {
    const { id } = useParams()
    const myAxios = useAxiosSecure()


    const { data } = useQuery({
        queryFn: () => getData(),
        queryKey: ['blog']

    })

    const { image, title, shortDescription, description, category, email } = data || [];

    console.log(data);
    const getData = async () => {
        const data = await myAxios(`/blog/${id}`)
        return data.data;
    }
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-6 row-gap-10 lg:grid-cols-2 ">
                <div>
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                        src={image}
                        alt=""
                    />
                </div>
                <div className="flex flex-col  justify-center">
                    <div className="max-w-xl mb-6">
                        <h2 className="max-w-lg mb-6 font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none break-all">
                            {title}
                            <span className="relative px-1">
                                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                                <span className="relative inline-block text-deep-purple-accent-400">
                                    a lazy dog
                                </span>
                            </span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg mb-4">
                            {shortDescription}
                        </p>
                        <p className="text-base text-gray-700 md:text-lg">
                            {description}
                        </p>
                    </div>
                    <p className="mb-4 text-sm font-bold tracking-widest ">
                        Category : <span className="text-pink-600">{category}</span>
                    </p>

                </div>
            </div>

            <div>
                <Comments id={id} dbEmail={email}/>
            </div>
        </div>
    );
};

export default ViewBlog;