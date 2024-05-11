import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Roots = () => {
    return (
        <div>
            <Navbar/>
            <div className="min-h">
            <Outlet/>
            </div>
            <Footer/>
            <ToastContainer/>
        </div>
    );
};

export default Roots;