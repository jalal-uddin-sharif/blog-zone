import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";

const Roots = () => {
  const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, [location]);
    return <>{props.children}</>;
  };

  return (
    <div>
      <ScrollToTop>
        <Navbar />
        <div className="min-h">
          <Outlet />
        </div>
        <Footer />
      </ScrollToTop>

      <ToastContainer />
      <Toaster />
    </div>
  );
};

export default Roots;
