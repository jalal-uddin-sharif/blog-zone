import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex justify-between  px-10 items-center h-full rounded-b-xl text-lg font-medium">
      <div>
        <h1 className="text-3xl">Sharif'z</h1>
      </div>

      <div>
        <ul className="flex gap-6">
          <NavLink
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            to="/all-blogs"
          >
            All Blogs
          </NavLink>
          
    
        </ul>
      </div>
      <div>
      <button
        className="px-6 py-3 border font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Get Started
      </button>
      </div>
    </div>
  );
};

export default Nav;
