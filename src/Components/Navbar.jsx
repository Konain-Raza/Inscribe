import React, { useState ,useEffect} from "react";

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
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode state

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

  // Toggle dark mode
  const handleDarkModeToggle = () => {
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);
    document.documentElement.classList.toggle("dark", newDarkModeState);
    localStorage.setItem("darkMode", JSON.stringify(newDarkModeState)); // Store the state in localStorage
  };
  useEffect(() => {
    const storedDarkMode = JSON.parse(localStorage.getItem("darkMode"));
    if (storedDarkMode !== null) {
      setIsDarkMode(storedDarkMode);
      document.documentElement.classList.toggle("dark", storedDarkMode);
    }
  }, []);
    

  return (
    <nav className=" text-black w-screen dark:bg-slate-900 md:px-10 lg:px-10 sm:px-5 p-0 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4 md:justify-between lg:justify-between sm:justify-center">
        <Link to="/" className="flex w-max">
          <img src={logo} className="h-[4.5rem]" alt="Logo" />
          <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
            Inscribe
          </span>
        </Link>
        <label  className=" flex relative  items-center justify-center w-28 cursor-pointer text-sm sm:hidden">
                <input
                  type="checkbox"
                  id="toggle"
                  onChange={handleDarkModeToggle}
                />
                <svg viewBox="0 0 69.667 44" xmlns="http://www.w3.org/2000/svg">
                  <g
                    transform="translate(3.5 3.5)"
                    data-name="Component 15 – 1"
                    id="Component_15_1"
                  >
                    <g
                      filter="url(#container)"
                      transform="matrix(1, 0, 0, 1, -3.5, -3.5)"
                    >
                      <rect
                        fill="#83cbd8"
                        transform="translate(3.5 3.5)"
                        rx="17.5"
                        height="35"
                        width="60.667"
                        data-name="container"
                        id="container"
                      ></rect>
                    </g>
                    <g transform="translate(2.333 2.333)" id="button">
                      <g data-name="sun" id="sun">
                        <g
                          filter="url(#sun-outer)"
                          transform="matrix(1, 0, 0, 1, -5.83, -5.83)"
                        >
                          <circle
                            fill="#f8e664"
                            transform="translate(5.83 5.83)"
                            r="15.167"
                            cy="15.167"
                            cx="15.167"
                            data-name="sun-outer"
                            id="sun-outer-2"
                          ></circle>
                        </g>
                        <g
                          filter="url(#sun)"
                          transform="matrix(1, 0, 0, 1, -5.83, -5.83)"
                        >
                          <path
                            fill="rgba(246,254,247,0.29)"
                            transform="translate(9.33 9.33)"
                            d="M11.667,0A11.667,11.667,0,1,1,0,11.667,11.667,11.667,0,0,1,11.667,0Z"
                            data-name="sun"
                            id="sun-3"
                          ></path>
                        </g>
                        <circle
                          fill="#fcf4b9"
                          transform="translate(8.167 8.167)"
                          r="7"
                          cy="7"
                          cx="7"
                          id="sun-inner"
                        ></circle>
                      </g>
                      <g data-name="moon" id="moon">
                        <g
                          filter="url(#moon)"
                          transform="matrix(1, 0, 0, 1, -31.5, -5.83)"
                        >
                          <circle
                            fill="#cce6ee"
                            transform="translate(31.5 5.83)"
                            r="15.167"
                            cy="15.167"
                            cx="15.167"
                            data-name="moon"
                            id="moon-3"
                          ></circle>
                        </g>
                        <g
                          fill="#a6cad0"
                          transform="translate(-24.415 -1.009)"
                          id="patches"
                        >
                          <circle
                            transform="translate(43.009 4.496)"
                            r="2"
                            cy="2"
                            cx="2"
                          ></circle>
                          <circle
                            transform="translate(39.366 17.952)"
                            r="2"
                            cy="2"
                            cx="2"
                            data-name="patch"
                          ></circle>
                          <circle
                            transform="translate(33.016 8.044)"
                            r="1"
                            cy="1"
                            cx="1"
                            data-name="patch"
                          ></circle>
                          <circle
                            transform="translate(51.081 18.888)"
                            r="1"
                            cy="1"
                            cx="1"
                            data-name="patch"
                          ></circle>
                          <circle
                            transform="translate(33.016 22.503)"
                            r="1"
                            cy="1"
                            cx="1"
                            data-name="patch"
                          ></circle>
                          <circle
                            transform="translate(50.081 10.53)"
                            r="1.5"
                            cy="1.5"
                            cx="1.5"
                            data-name="patch"
                          ></circle>
                        </g>
                      </g>
                    </g>
                    <g
                      filter="url(#cloud)"
                      transform="matrix(1, 0, 0, 1, -3.5, -3.5)"
                    >
                      <path
                        fill="#fff"
                        transform="translate(-3466.47 -160.94)"
                        d="M3512.81,173.815a4.463,4.463,0,0,1,2.243.62.95.95,0,0,1,.72-1.281,4.852,4.852,0,0,1,2.623.519c.034.02-.5-1.968.281-2.716a2.117,2.117,0,0,1,2.829-.274,1.821,1.821,0,0,1,.854,1.858c.063.037,2.594-.049,3.285,1.273s-.865,2.544-.807,2.626a12.192,12.192,0,0,1,2.278.892c.553.448,1.106,1.992-1.62,2.927a7.742,7.742,0,0,1-3.762-.3c-1.28-.49-1.181-2.65-1.137-2.624s-1.417,2.2-2.623,2.2a4.172,4.172,0,0,1-2.394-1.206,3.825,3.825,0,0,1-2.771.774c-3.429-.46-2.333-3.267-2.2-3.55A3.721,3.721,0,0,1,3512.81,173.815Z"
                        data-name="cloud"
                        id="cloud"
                      ></path>
                    </g>
                    <g
                      fill="#def8ff"
                      transform="translate(3.585 1.325)"
                      id="stars"
                    >
                      <path
                        transform="matrix(-1, 0.017, -0.017, -1, 24.231, 3.055)"
                        d="M.774,0,.566.559,0,.539.458.933.25,1.492l.485-.361.458.394L1.024.953,1.509.592.943.572Z"
                      ></path>
                      <path
                        transform="matrix(-0.777, 0.629, -0.629, -0.777, 23.185, 12.358)"
                        d="M1.341.529.836.472.736,0,.505.46,0,.4.4.729l-.231.46L.605.932l.4.326L.9.786Z"
                        data-name="star"
                      ></path>
                      <path
                        transform="matrix(0.438, 0.899, -0.899, 0.438, 23.177, 29.735)"
                        d="M.015,1.065.475.9l.285.365L.766.772l.46-.164L.745.494.751,0,.481.407,0,.293.285.658Z"
                        data-name="star"
                      ></path>
                      <path
                        transform="translate(12.677 0.388) rotate(104)"
                        d="M1.161,1.6,1.059,1,1.574.722.962.607.86,0,.613.572,0,.457.446.881.2,1.454l.516-.274Z"
                        data-name="star"
                      ></path>
                      <path
                        transform="matrix(-0.07, 0.998, -0.998, -0.07, 11.066, 15.457)"
                        d="M.873,1.648l.114-.62L1.579.945,1.03.62,1.144,0,.706.464.157.139.438.7,0,1.167l.592-.083Z"
                        data-name="star"
                      ></path>
                      <path
                        transform="translate(8.326 28.061) rotate(11)"
                        d="M.593,0,.638.724,0,.982l.7.211.045.724.36-.64.7.211L1.342.935,1.7.294,1.063.552Z"
                        data-name="star"
                      ></path>
                      <path
                        transform="translate(5.012 5.962) rotate(172)"
                        d="M.816,0,.5.455,0,.311.323.767l-.312.455.516-.215.323.456L.827.911,1.343.7.839.552Z"
                        data-name="star"
                      ></path>
                      <path
                        transform="translate(2.034 6.015) rotate(-104)"
                        d="M.648,0,.584.758.969.733,1.21.455l.084.953.714-.54.214.644.369-.153.84.2Z"
                        data-name="star"
                      ></path>
                      <path
                        transform="matrix(-0.138, 0.978, -0.978, -0.138, 15.226, 23.848)"
                        d="M.9.16.424.47,0,.226.226.52.365.486,0,0,.187.447,1.121,0,0,.368.41.1Z"
                        data-name="star"
                      ></path>
                    </g>
                  </g>
                </svg>
              </label>

        <div className="flex items-center justify-between w-max lg:w-max md:w-full md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button onClick={handleCreatePostClick} className="flex items-center justify-center h-max">
            <img
              src={writeposticon}
              className="w-[3rem] h-[3rem]"
              alt="Create Post"
            />
          </button>
          {user.email ? (
            <div className="flex items-center space-x-4">
              <span className="font-semibold text-md sm:hidden hidden">
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
              <button className="btn flex justify-center items-center gap-3 w-[10em] h-[3.6em] rounded-[3em] border-none transition-all duration-[450ms] ease-in-out bg-blue-700 hover:bg-gradient-to-t hover:from-blue-500 hover:to-blue-700 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4),inset_0_-4px_0_0_rgba(0,0,0,0.2),0_0_0_4px_rgba(255,255,255,0.2),0_0_180px_0px_rgba(30,144,255,1)] hover:transform hover:translate-y-[-2px] cursor-pointer">
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
                        <label id="theme-toggle-button" className=" hidden md:flex relative items-center justify-center w-28 cursor-pointer text-sm" >
                <input
                  type="checkbox"
                  id="toggle"
                  onChange={handleDarkModeToggle}
                />
                <svg viewBox="0 0 69.667 44" xmlns="http://www.w3.org/2000/svg">
                  <g
                    transform="translate(3.5 3.5)"
                    data-name="Component 15 – 1"
                    id="Component_15_1"
                  >
                    <g
                      filter="url(#container)"
                      transform="matrix(1, 0, 0, 1, -3.5, -3.5)"
                    >
                      <rect
                        fill="#83cbd8"
                        transform="translate(3.5 3.5)"
                        rx="17.5"
                        height="35"
                        width="60.667"
                        data-name="container"
                        id="container"
                      ></rect>
                    </g>
                    <g transform="translate(2.333 2.333)" id="button">
                      <g data-name="sun" id="sun">
                        <g
                          filter="url(#sun-outer)"
                          transform="matrix(1, 0, 0, 1, -5.83, -5.83)"
                        >
                          <circle
                            fill="#f8e664"
                            transform="translate(5.83 5.83)"
                            r="15.167"
                            cy="15.167"
                            cx="15.167"
                            data-name="sun-outer"
                            id="sun-outer-2"
                          ></circle>
                        </g>
                        <g
                          filter="url(#sun)"
                          transform="matrix(1, 0, 0, 1, -5.83, -5.83)"
                        >
                          <path
                            fill="rgba(246,254,247,0.29)"
                            transform="translate(9.33 9.33)"
                            d="M11.667,0A11.667,11.667,0,1,1,0,11.667,11.667,11.667,0,0,1,11.667,0Z"
                            data-name="sun"
                            id="sun-3"
                          ></path>
                        </g>
                        <circle
                          fill="#fcf4b9"
                          transform="translate(8.167 8.167)"
                          r="7"
                          cy="7"
                          cx="7"
                          id="sun-inner"
                        ></circle>
                      </g>
                      <g data-name="moon" id="moon">
                        <g
                          filter="url(#moon)"
                          transform="matrix(1, 0, 0, 1, -31.5, -5.83)"
                        >
                          <circle
                            fill="#cce6ee"
                            transform="translate(31.5 5.83)"
                            r="15.167"
                            cy="15.167"
                            cx="15.167"
                            data-name="moon"
                            id="moon-3"
                          ></circle>
                        </g>
                        <g
                          fill="#a6cad0"
                          transform="translate(-24.415 -1.009)"
                          id="patches"
                        >
                          <circle
                            transform="translate(43.009 4.496)"
                            r="2"
                            cy="2"
                            cx="2"
                          ></circle>
                          <circle
                            transform="translate(39.366 17.952)"
                            r="2"
                            cy="2"
                            cx="2"
                            data-name="patch"
                          ></circle>
                          <circle
                            transform="translate(33.016 8.044)"
                            r="1"
                            cy="1"
                            cx="1"
                            data-name="patch"
                          ></circle>
                          <circle
                            transform="translate(51.081 18.888)"
                            r="1"
                            cy="1"
                            cx="1"
                            data-name="patch"
                          ></circle>
                          <circle
                            transform="translate(33.016 22.503)"
                            r="1"
                            cy="1"
                            cx="1"
                            data-name="patch"
                          ></circle>
                          <circle
                            transform="translate(50.081 10.53)"
                            r="1.5"
                            cy="1.5"
                            cx="1.5"
                            data-name="patch"
                          ></circle>
                        </g>
                      </g>
                    </g>
                    <g
                      filter="url(#cloud)"
                      transform="matrix(1, 0, 0, 1, -3.5, -3.5)"
                    >
                      <path
                        fill="#fff"
                        transform="translate(-3466.47 -160.94)"
                        d="M3512.81,173.815a4.463,4.463,0,0,1,2.243.62.95.95,0,0,1,.72-1.281,4.852,4.852,0,0,1,2.623.519c.034.02-.5-1.968.281-2.716a2.117,2.117,0,0,1,2.829-.274,1.821,1.821,0,0,1,.854,1.858c.063.037,2.594-.049,3.285,1.273s-.865,2.544-.807,2.626a12.192,12.192,0,0,1,2.278.892c.553.448,1.106,1.992-1.62,2.927a7.742,7.742,0,0,1-3.762-.3c-1.28-.49-1.181-2.65-1.137-2.624s-1.417,2.2-2.623,2.2a4.172,4.172,0,0,1-2.394-1.206,3.825,3.825,0,0,1-2.771.774c-3.429-.46-2.333-3.267-2.2-3.55A3.721,3.721,0,0,1,3512.81,173.815Z"
                        data-name="cloud"
                        id="cloud"
                      ></path>
                    </g>
                    <g
                      fill="#def8ff"
                      transform="translate(3.585 1.325)"
                      id="stars"
                    >
                      <path
                        transform="matrix(-1, 0.017, -0.017, -1, 24.231, 3.055)"
                        d="M.774,0,.566.559,0,.539.458.933.25,1.492l.485-.361.458.394L1.024.953,1.509.592.943.572Z"
                      ></path>
                      <path
                        transform="matrix(-0.777, 0.629, -0.629, -0.777, 23.185, 12.358)"
                        d="M1.341.529.836.472.736,0,.505.46,0,.4.4.729l-.231.46L.605.932l.4.326L.9.786Z"
                        data-name="star"
                      ></path>
                      <path
                        transform="matrix(0.438, 0.899, -0.899, 0.438, 23.177, 29.735)"
                        d="M.015,1.065.475.9l.285.365L.766.772l.46-.164L.745.494.751,0,.481.407,0,.293.285.658Z"
                        data-name="star"
                      ></path>
                      <path
                        transform="translate(12.677 0.388) rotate(104)"
                        d="M1.161,1.6,1.059,1,1.574.722.962.607.86,0,.613.572,0,.457.446.881.2,1.454l.516-.274Z"
                        data-name="star"
                      ></path>
                      <path
                        transform="matrix(-0.07, 0.998, -0.998, -0.07, 11.066, 15.457)"
                        d="M.873,1.648l.114-.62L1.579.945,1.03.62,1.144,0,.706.464.157.139.438.7,0,1.167l.592-.083Z"
                        data-name="star"
                      ></path>
                      <path
                        transform="translate(8.326 28.061) rotate(11)"
                        d="M.593,0,.638.724,0,.982l.7.211.045.724.36-.64.7.211L1.342.935,1.7.294,1.063.552Z"
                        data-name="star"
                      ></path>
                      <path
                        transform="translate(5.012 5.962) rotate(172)"
                        d="M.816,0,.5.455,0,.311.323.767l-.312.455.516-.215.323.456L.827.911,1.343.7.839.552Z"
                        data-name="star"
                      ></path>
                      <path
                        transform="translate(2.034 6.015) rotate(-104)"
                        d="M.648,0,.584.758.969.733,1.21.455l.084.953.714-.54.214.644.369-.153.84.2Z"
                        data-name="star"
                      ></path>
                      <path
                        transform="matrix(-0.138, 0.978, -0.978, -0.138, 15.226, 23.848)"
                        d="M.9.16.424.47,0,.226.226.52.365.486,0,0,.187.447,1.121,0,0,.368.41.1Z"
                        data-name="star"
                      ></path>
                    </g>
                  </g>
                </svg>
              </label>
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
                    : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700  dark:hover:text-black dark:text-white"
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
                    : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700  dark:hover:text-black dark:text-white"
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
                    : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700  dark:hover:text-black dark:text-white"
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
                    : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700  dark:hover:text-black dark:text-white"
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
