import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const { user, logOut } = useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false); // Toggle dropdown menu

    const links = (
        <>
            <NavLink to="/" className="hover:text-blue-300">
                <li>Home</li>
            </NavLink>
            <NavLink to="/rooms" className="hover:text-blue-300">
                <li>Rooms</li>
            </NavLink>
            <NavLink to="/mybooking" className="hover:text-blue-300">
                <li>My Booking</li>
            </NavLink>
        </>
    );

    const handleProfileClick = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <div className="navbar bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            {/* Navbar Start */}
            <div className="navbar-start">
                {/* Mobile Hamburger Menu */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>

                    {/* Mobile Dropdown Menu */}
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-white text-gray-800 rounded-box z-[1] mt-3 w-52 p-2 shadow-md"
                    >
                        {links}
                    </ul>
                </div>

                {/* Logo or Brand Name */}
                <a className="btn btn-ghost text-white text-2xl font-semibold">Hotel California</a>
            </div>

            {/* Navbar Center for Desktop */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-6">{links}</ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end space-x-4 relative">
                {/* Conditional Rendering */}
                {!user ? (
                    <>
                        <a
                            href="/signin"
                            className="btn bg-gray-700 text-white hover:bg-gray-800 transition-colors py-2 px-4 rounded-lg"
                        >
                            Sign In
                        </a>

                        <a
                            href="/signup"
                            className="btn bg-blue-500 text-white hover:bg-blue-600 transition-colors py-2 px-4 rounded-lg"
                        >
                            Sign Up
                        </a>
                    </>
                ) : (
                    <>
                        {/* Display user image */}
                        <div
                            className="flex items-center space-x-2 cursor-pointer"
                            onClick={handleProfileClick}
                        >
                            <span className="hidden lg:block text-white font-medium">
                                {user.displayName}
                            </span>
                            <img
                                src={user.photoURL || "default-avatar.png"} // Default avatar if no photoURL is provided
                                alt={user.displayName}
                                className="w-10 h-10 rounded-full border-2 border-white shadow-lg"
                            />

                        </div>

                        {/* Dropdown Menu */}
                        {menuOpen && (
                            <div className="absolute top-12 right-0 bg-white text-gray-800 rounded-lg shadow-lg w-48 p-4 z-10">
                                
                                <NavLink
                                    to="/addedrooms"
                                    className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md"
                                >
                                    Add Rooms
                                </NavLink>
                                <button
                                    onClick={logOut}
                                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100 rounded-md"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
