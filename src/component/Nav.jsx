"use client";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../customHook/useAuth";

const Nav = () => {
  const {user, logOut} = useAuth()
    return (
      <Navbar fluid rounded className="fixed w-full container rounded-b-xl z-30 border">
      <Navbar.Brand as={Link} to='/'>
        <img src="/logo.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">BlogZone</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img={user?.photoURL} rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">{user?.displayName}</span>
            <span className="block truncate text-sm font-medium">{user?.email}</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          {
            user ? <Dropdown.Item onClick={logOut}>Sign out</Dropdown.Item> : <Link to="/login"><Dropdown.Item>Sign In</Dropdown.Item></Link>
          }
          {/* <Dropdown.Item>Sign out</Dropdown.Item> */}
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="bg-white lg:bg-none z-20">
        <Navbar.Link>
          <NavLink to={'/'}>Home</NavLink>
        </Navbar.Link>
        <Navbar.Link>
          <NavLink to={'/add-blogs'}>Add Blog</NavLink>
        </Navbar.Link>
        <Navbar.Link>
          <NavLink to={'/all-blogs'}>All Blog</NavLink>
        </Navbar.Link>
        <Navbar.Link>
          <NavLink to={'/featured-blogs'}>Featured Blogs</NavLink>
        </Navbar.Link>
        <Navbar.Link>
          <NavLink to={'/wishlist'}>Wishlist </NavLink>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    );
};

export default Nav;