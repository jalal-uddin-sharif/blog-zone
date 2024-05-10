"use client";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    return (
      <Navbar fluid rounded className="fixed w-full container rounded-b-xl z-30 border">
      <Navbar.Brand as={Link} to='/'>
        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">BlogZone</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/logo.svg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
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