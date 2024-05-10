import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Roots = () => {
    return (
        <div>
            <Navbar/>
            <div className="min-h">
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Roots;