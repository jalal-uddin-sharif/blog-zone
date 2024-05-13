import { Dropdown } from "flowbite-react";
import useAxiosSecure from "../customHook/useAxiosSecure";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
import useAuth from "../customHook/useAuth";
const AddBlog = () => {
    const [cate, setCate] = useState(false)
    const {user} = useAuth()

    const myAxios = useAxiosSecure()

    const handleForm = async(e) =>{
        e.preventDefault();
        const form = e.target;
        const title = form.Title.value;
        const image = form.Image.value;
        const shortDescription = form.shortDescription.value;
        const description = form.Description.value;
        const category = form.Category.value;
        const email = user?.email;
        const timestamp = new Date()
        setCate(false)
        if(category === 'random'){
            return setCate(true)
        }
console.log(category);
        const blog = {title, image, shortDescription, description, category, email, timestamp}
        console.table(blog);

        const {data} = await myAxios.post('/blogs', blog)
        if(data.insertedId){
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
              });
              form.reset()
        }
        console.log(data);
    }
    return (
        <div>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">

                    <div className="mb-10 md:mb-16">
                        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Create New Blog</h2>

                        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">create or add your new blog by following filled below</p>
                    </div>

                    <form onSubmit={handleForm} className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">

                        <div className="sm:col-span-2">
                            <label for="Title" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Title</label>
                            <input required name="Title" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                        </div>
                        <div className="sm:col-span-2">
                            <label for="Image" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Image</label>
                            <input required name="Image" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                        </div>
                        

                        <div>
                            <label for="Category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                {
                                    cate ? <span className="text-red-700">Must select one option *</span> : "Select an option "
                                }
                                </label>
                            <select id="Category"
                            name="Category"
                             class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected value="random">Select category</option>
                                <option value="tricks">Tricks</option>
                                <option value="tech_news">Tech News</option>
                                <option value="apps_review">Apps review</option>
                            </select>
                        </div>

                        <div className="sm:col-span-2">
                            <label for="shortDescription" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Short description</label>
                            <input required name="shortDescription" className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                        </div>

                        <div className="sm:col-span-2">
                            <label for="Description" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Description</label>
                            <textarea required name="Description" className="h-40 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"></textarea>
                        </div>

                        <div className="flex items-center justify-between sm:col-span-2">
                            <button type="submit" className="inline-block w-full rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Submit</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBlog;