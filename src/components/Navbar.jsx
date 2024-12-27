import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const { user, logOut } = useContext(AuthContext);
    const links = <>
        <NavLink to='/rooms'><li>Rooms</li></NavLink>
        <NavLink to='/addedrooms'><li>AddedRoom</li></NavLink>

    </>

    return (
        <div className="navbar bg-blue-600">
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
                <ul className="menu menu-horizontal px-1 space-x-6">
                    {links}
                </ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end space-x-4">
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
                        <div className="flex items-center space-x-2">
                            <img
                                src={user.photoURL || "default-avatar.png"}  // Default avatar if no photoURL is provided
                                alt={user.displayName}
                                className="w-8 h-8 rounded-full"
                            />
                            <span className="text-white font-medium">{user.displayName}</span>
                        </div>

                        {/* Logout Button */}
                        <button
                            onClick={logOut}
                            className="btn bg-red-500 text-white hover:bg-red-600 transition-colors py-2 px-4 rounded-lg"
                        >
                            Logout
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
