import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../customHook/useAxiosSecure";
import BlogsCard from "../component/BlogsCard";
import { useState } from "react";


const Allblogs = () => {
    const myAxios = useAxiosSecure()
    const [filter, setFilter] = useState("")
    const [search, setSearch] = useState("")
    console.log(typeof search);

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



    return (
        <div>
            <BlogsCard setFilter={setFilter} blogs={blogs} setSearch={setSearch}/>
        </div>
    );
};

export default Allblogs;