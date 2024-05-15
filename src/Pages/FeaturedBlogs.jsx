import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import useAxiosSecure from "../customHook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import mData from '../MOCK_DATA.json'
import { useMemo } from "react";
import useAuth from "../customHook/useAuth";
const FeaturedBlogs = () => {

    const {user} = useAuth()
    const myAxios = useAxiosSecure()
    const { data: blogData, refetch } = useQuery({
        queryFn: () => getData(),
        queryKey: [user?.email]
    })
    console.log(blogData);
    const getData = async () => {
        const data = await myAxios("/featured-blog")
        console.log(data.data);
        return data.data;
    }

    //tanstack table
    // const columnHelper = createColumnHelper()
    const columns = [
        {
            header: 'SI',
            accessorKey: 'id',
            cell: (info) => info.row.index + 1
        },
        {
            header: 'Title',
            accessorKey: 'title',
        },
        {
            header: 'Author Name',
            accessorKey: 'authorName',
        },
        {
            header: 'Author Profile',
            accessorKey: 'authorProfile',
            cell: (info) => <span>
                <img src={info?.getValue()} alt="" className="rounded-full w-10 h-10" />
            </span>
        },

    ]


    const data = useMemo(() => blogData || [] , [blogData])
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
    })
    return (

        <div className="lg:container lg:mx-auto mx-4 mt-12 ">
            <table className="w-full text-left border">
                {
                    table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id} className="bg-indigo-600">
                            {headerGroup.headers.map(header => <th key={header.id} className="capitalize px-3 py-2">

                                {flexRender(header.column.columnDef.header, header.getContext())}
                            </th>)}

                        </tr>
                    ))
                }
                <tbody>
                    {
                        table.getRowModel().rows.map((row, idx) => (
                            <tr key={row.id} className={
                                `${idx % 2 === 0 ? 'bg-white' : 'bg-gray-200'}`
                            } >
                                {
                                    row.getVisibleCells().map(cell => (
                                        <td key={cell.id} className="px-3 py-2 mx-auto">
                                          
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default FeaturedBlogs;