import React, { useState } from "react";

import { Link, useNavigate, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import useStore from "../Store.js";
import { auth } from "../../firebase-config.js";
import logo from "../assets/logo.png";
import writeposticon from "../assets/writepost-icon.png";
import "../index.css";
import { toast } from "react-toastify";
import avatar from "../assets/avatar.png";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const [isNavOpen, setIsNavOpen] = useState(false);
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);
  const navigate = useNavigate();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      document.cookie.split(";").forEach((cookie) => {
        const cookieName = cookie.split("=")[0].trim();
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
      });

      setUser({ email: "", displayName: "", photoURL: "" });
      navigate("/auth");
    } catch (error) {
      toast.error(`Sign out error: ${error}`);
    }
  };

  const handleCreatePostClick = () => {
    if (!user.email) {
      navigate("/auth");
    } else {
      navigate("/createpost");
    }
  };

  return (
    <nav className="bg-white text-black w-[95%] mx-auto">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4 md:justify-between lg:justify-between sm:justify-center">
        <Link to="/" className="flex w-max">
          <img src={logo} className="h-[4.5rem]" alt="Logo" />
          <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-black">
            Inscribe
          </span>
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button onClick={handleCreatePostClick} className="flex items-center">
            <img
              src={writeposticon}
              className="w-[3rem] h-[3rem]"
              alt="Create Post"
            />
          </button>
          {user.email ? (
            <div className="flex items-center space-x-4">
              <span className="font-semibold text-md">
                {user.displayName || user.username || "User"}
              </span>
              {user.photoURL && (
                <img
                  src={user.photoURL || avatar}
                  alt="Profile"
                  className="w-[3rem] h-[3rem] rounded-full"
                />
              )}
              <button
                className="btn flex justify-center items-center gap-3 w-[10em] h-[3.5em] rounded-[3em] border-none transition-all duration-[450ms] ease-in-out bg-red-700 hover:bg-gradient-to-t hover:from-red-500 hover:to-red-700 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4),inset_0_-4px_0_0_rgba(0,0,0,0.2),0_0_0_4px_rgba(255,255,255,0.2),0_0_180px_0px_rgba(255,0,0,1)] hover:transform hover:translate-y-[-2px] cursor-pointer"
                onClick={handleSignOut}
              >
                <svg
                  height="24"
                  width="24"
                  fill="#AAAAAA"
                  viewBox="0 0 24 24"
                  className="sparkle transition-all duration-[800ms] ease-in-out hover:fill-white hover:scale-125"
                >
                  <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
                </svg>
                <span className="text font-semibold text-[#AAAAAA] text-md hover:text-white">
                  Signout
                </span>
              </button>
            </div>
          ) : (
            <Link to="/auth">
              <button className="btn flex justify-center items-center gap-3 w-[10em] h-[3.5em] rounded-[3em] border-none transition-all duration-[450ms] ease-in-out bg-blue-700 hover:bg-gradient-to-t hover:from-blue-500 hover:to-blue-700 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4),inset_0_-4px_0_0_rgba(0,0,0,0.2),0_0_0_4px_rgba(255,255,255,0.2),0_0_180px_0px_rgba(30,144,255,1)] hover:transform hover:translate-y-[-2px] cursor-pointer">
                <svg
                  height="24"
                  width="24"
                  fill="#AAAAAA"
                  viewBox="0 0 24 24"
                  className="sparkle transition-all duration-[800ms] ease-in-out hover:fill-white hover:scale-125"
                >
                  <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
                </svg>
                <span className="text font-semibold text-[#AAAAAA] text-md hover:text-white">
                  Get Started
                </span>
              </button>
            </Link>
          )}
          <button
            onClick={toggleNav}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded={isNavOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-center w-full md:flex md:w-auto md:order-1  ${
            isNavOpen ? "flex" : "hidden"
          }`}
          id="navbar-cta"
        >
          <ul className="flex text-lg flex-col justify-end items-center font-medium p-10 md:p-0 mt-4 border border-gray-100 rounded-lg bg-red-1000 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  w-[20rem]">
            <li>
              <Link
                to="/"
                className={`block py-2 px-3 md:p-0 rounded ${
                  isActive("/")
                    ? "text-blue-700"
                    : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700  dark:hover:text-black"
                }`}
                aria-current={isActive("/") ? "page" : undefined}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className={`block py-2 px-3 md:p-0 rounded ${
                  isActive("/blog")
                    ? "text-blue-700"
                    : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700  dark:hover:text-black"
                }`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`block py-2 px-3 md:p-0 rounded ${
                  isActive("/about")
                    ? "text-blue-700"
                    : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700  dark:hover:text-black"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`block py-2 px-3 md:p-0 rounded ${
                  isActive("/contact")
                    ? "text-blue-700"
                    : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700  dark:hover:text-black"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
