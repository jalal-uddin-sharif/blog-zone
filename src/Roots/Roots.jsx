import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const Roots = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Roots;