const Nodata = ({ text }) => {
    return (
        <div className="container mx-auto flex justify-center items-center  min-h">
            <div className="text-center space-y-6 my-20">
                <h1 className="text-7xl font-bold text-pink-700"> Empty!</h1>
                <p className="text-xl">{text || "no data found"}</p>
                <a href="#_" class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-lg shadow-xl group hover:ring-1 hover:ring-purple-500">
                    <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                    <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-xl opacity-30 group-hover:rotate-90 ease"></span>
                    <span class="relative text-white">Back to Home</span>
                </a>
            </div>
          
        </div>
    );
};

export default Nodata;