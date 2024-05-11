import { LuSendHorizonal } from "react-icons/lu";
const Comments = () => {
    return (
        <div>
            <div class="flex w-full items-center rounded-full">
      <div class="flex-1 border-b border-gray-300"></div>
      <span class="text-black text-lg font-semibold leading-8 px-8 py-3">Comments</span>
      <div class="flex-1 border-b border-gray-300"></div>
      </div>
            <div className="border p-4 w-2/3">
                <div className="flex items-center gap-x-2">
                    <img className="object-cover w-16 h-16 rounded-full" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100" alt="" />

                    <div>
                        <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Mia John</h1>

                        <p className="text-base text-gray-500 dark:text-gray-400">miajohn@merakiui.com</p>
                    </div>

                </div>
                <div className="flex gap-2 mt-3">
                    <textarea placeholder="post your comment" name="comment" id="comment" cols="50" rows="1" className="rounded-full"></textarea>
                    <button
                        class="px-6 border py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                        type="button">
                        <LuSendHorizonal size={20} />
                    </button>
                </div>
                
            </div>

            <div className="border p-4 my-4 w-2/3">
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