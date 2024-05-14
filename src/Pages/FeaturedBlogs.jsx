import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import useAxiosSecure from "../customHook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const FeaturedBlogs = () => {

    const myAxios = useAxiosSecure()

    const {data: blogData} = useQuery({
        queryFn: () => getData(),
        queryKey: ['']
    })
console.log(blogData);
    const getData = async () =>{
        const data = await myAxios("/featured-blog")
        console.log(data.data);
        return data.data;
    }

    //tanstack table
    const columnHelper = createColumnHelper()
    const columns = [
        columnHelper.accessor("id",{
            cell: info => <span>{info.getValue()}</span>
        })
    ]

    const table = useReactTable({
        blogData,
        columns,
        getCoreRowModel: getCoreRowModel()
    })
    return (
        // <div className="container mx-auto mt-16">
        // <table>
        // {
        //     table.getHeaderGroups(headerGroup =>(
        //         <tr key={headerGroup.id}>
        //             {
        //                 headerGroup.headers.map(header =>(
        //                     <th key={header.id}>
        //                         {flexRender(header.column.columnDef.header, header.getContext())}
        //                     </th>
        //                 ))
        //             }
        //         </tr>
        //     ))
        // }
        // </table>
        // </div>
        <div></div>
    );
};

export default FeaturedBlogs;