import { LuSendHorizonal } from "react-icons/lu";
import useAuth from "../customHook/useAuth";
import useAxiosSecure from "../customHook/useAxiosSecure";
import Swal from "sweetalert2";
const Comments = ({id}) => {
    const {user} = useAuth()
    const myAxios = useAxiosSecure()
    const handleComments = async(e) =>{
        e.preventDefault()
        const form = e.target;
        const comment = form.comment.value;
        const email = user?.email
        const image = user?.photoURL
        const name = user?.displayName

        const comments = {id, name, email, image, comment}
        console.log(comments);

        const data = await myAxios.post("/send-comments", comments)
       
    }





    return (
        <div>
            <div class="flex w-full items-center rounded-full">
      <div class="flex-1 border-b border-gray-300"></div>
      <span class="text-black text-lg font-semibold leading-8 px-8 py-3">Comments</span>
      <div class="flex-1 border-b border-gray-300"></div>
      </div>
            <div className="border p-4 w-2/3 bg-gray-100 rounded-md">
                <div className="flex items-center gap-x-2">
                    <img className="object-cover w-16 h-16 rounded-full" src={user?.photoURL} alt="" />

                    <div>
                        <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">{user?.displayName}</h1>

                        <p className="text-base text-gray-500 dark:text-gray-400">{user?.email}</p>
                    </div>

                </div>
                <form onSubmit={handleComments}>
                <div className="flex gap-2 mt-3">
                    <textarea required placeholder="post your comment" name="comment" id="comment" cols="50" rows="1" className="rounded-full"></textarea>
                    <button
                        class="px-6 border py-3 font-sans text-xs font-bold bg-green-500 text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-green-400 active:bg-gray-900/20"
                        type="submit">
                        <LuSendHorizonal color="white" size={20} />
                    </button>
                </div>
                </form>
                
            </div>

            <div className="border p-4 my-4 w-2/3 bg-gray-50 rounded-md">
                <div className="flex items-center gap-x-2">
                    <img className="object-cover w-16 h-16 rounded-full" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100" alt="" />

                    <div>
                        <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Mia John</h1>
                    </div>

                </div>
                <div className="mt-3">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aperiam iste tempora earum sapiente quos qui sit deserunt tempore omnis.</p>
                </div>
                
            </div>

        </div>
    );
};

export default Comments;