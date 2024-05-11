import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../customHook/useAxiosSecure";
import BlogsCard from "../component/BlogsCard";


const Allblogs = () => {
    const myAxios = useAxiosSecure()


    const {data: blogs = [], 
        isLoading, } = useQuery({
        queryFn: ()=> getData(),
        queryKey: ['blogs']
    })

    console.log(blogs);

    const getData = async() =>{
       const data =await myAxios('/blogs')
       return data.data;
    }



    return (
        <div>
            <BlogsCard blogs={blogs}/>
        </div>
    );
};

export default Allblogs;