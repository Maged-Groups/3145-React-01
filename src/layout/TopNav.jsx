import {
  Avatar,
  Button,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

import { Link } from "react-router";

import { useSelector } from "react-redux";
import { Fragment } from "react";
import { logoutUser } from "../lib/redux/userSlice";
import { useDispatch } from "react-redux";

const links = [
  { label: "Home", url: "/" },
  { label: "Counter", url: "/counter" },
  { label: "Counter 2", url: "/counter-2" },
  { label: "Products", url: "/products" },
  { label: "Users", url: "/users" },
];

// links.forEach((link) => console.log(link));

export default function TopNav() {
  const userData = useSelector((store) => store.userSlice.user);

  const dispatch = useDispatch();

  console.log("🎁 userData", userData);

  const handleLogout = () => {
    dispatch(logoutUser());

    // Remove only key name = loggedinUser
    // localStorage.removeItem('loggedinUser');

    // Remove all keys
    localStorage.clear();
  };

  return (
    <Navbar fluid rounded className="bg-gray-700! text-amber-100!">
      <NavbarBrand href="https://flowbite-react.com">
        <img
          src="/vite.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="hidden sm:inline self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          My App
        </span>
      </NavbarBrand>
      <div className="flex md:order-2 items-center gap-1">
        <span className="block text-sm text-white">{userData.firstName}</span>
        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt="User settings" img={userData.image} rounded />}
        >
          <DropdownHeader>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </DropdownHeader>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        <div className="flex gap-2">
          {userData.id ? (
            <Button
              size="sm"
              className="px-2 py-0.5"
              color={"red"}
              onClick={handleLogout}
            >
              Logout
            </Button>
          ) : (
            <>
              <Link to="/auth/register">
                <Button size="sm" className="px-2 py-0.5" color={"blue"}>
                  Register
                </Button>
              </Link>
              <Link to="/auth/login" className="green">
                <Button size="sm" className="px-2 py-0.5" color={"green"}>
                  Login
                </Button>
              </Link>
            </>
          )}
        </div>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        {links.map(({ label, url }) => (
          <Link key={label} className="" to={`${url}`}>
            {label}
          </Link>
        ))}
      </NavbarCollapse>
    </Navbar>
  );
}
