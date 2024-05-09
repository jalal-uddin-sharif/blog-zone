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
        <button className="">Get Started</button>
      </div>
    </div>
  );
};

export default Nav;
