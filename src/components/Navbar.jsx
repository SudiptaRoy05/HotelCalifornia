export default function Navbar() {
    return (
        <div>
            {/* Navbar Container */}
            <nav className="navbar bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 px-6 py-4 shadow-lg">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <a
                        href="/"
                        className="text-2xl font-bold text-white tracking-wide hover:text-blue-200 transition-colors"
                    >
                        CorpBrand
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-6">
                        <a
                            href="/home"
                            className="text-lg font-medium text-white hover:text-blue-200 transition-colors"
                        >
                            Home
                        </a>
                        <a
                            href="/about"
                            className="text-lg font-medium text-white hover:text-blue-200 transition-colors"
                        >
                            About
                        </a>
                        <a
                            href="/signup"
                            className="px-5 py-2 bg-white text-blue-600 font-medium rounded-lg shadow hover:bg-blue-200 transition-all"
                        >
                            Sign Up
                        </a>

                        {/* User Image Dropdown */}
                        <details className="dropdown dropdown-end">
                            <summary className="cursor-pointer flex items-center">
                                <img
                                    src="https://via.placeholder.com/40"
                                    alt="User"
                                    className="w-10 h-10 rounded-full border border-white hover:ring-2 hover:ring-blue-400 transition-all"
                                />
                            </summary>
                            <ul className="dropdown-content menu p-3 shadow-md bg-white border rounded-lg w-48 text-gray-700 mt-3">
                                <li>
                                    <a
                                        href="/profile"
                                        className="py-2 px-3 hover:bg-gray-100 rounded-lg text-sm font-medium transition-all"
                                    >
                                        Profile
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/settings"
                                        className="py-2 px-3 hover:bg-gray-100 rounded-lg text-sm font-medium transition-all"
                                    >
                                        Settings
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/logout"
                                        className="py-2 px-3 hover:bg-red-100 text-red-600 rounded-lg text-sm font-medium transition-all"
                                    >
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </details>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <label htmlFor="menu-toggle" className="text-white text-2xl cursor-pointer">
                            &#9776;
                        </label>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                <input type="checkbox" id="menu-toggle" className="hidden" />
                <div className="lg:hidden">
                    <ul className="menu menu-compact mt-3 p-3 shadow-md bg-white border rounded-lg text-gray-700">
                        <li>
                            <a
                                href="/home"
                                className="py-2 px-3 hover:bg-blue-100 text-lg font-medium transition-all"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/about"
                                className="py-2 px-3 hover:bg-blue-100 text-lg font-medium transition-all"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="/signup"
                                className="px-5 py-2 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 transition-all"
                            >
                                Sign Up
                            </a>
                        </li>
                        <li>
                            <details className="dropdown dropdown-end">
                                <summary className="cursor-pointer flex items-center">
                                    <img
                                        src="https://via.placeholder.com/40"
                                        alt="User"
                                        className="w-10 h-10 rounded-full border border-white hover:ring-2 hover:ring-blue-400 transition-all"
                                    />
                                </summary>
                                <ul className="dropdown-content menu p-3 shadow-md bg-white border rounded-lg w-48 text-gray-700 mt-3">
                                    <li>
                                        <a
                                            href="/profile"
                                            className="py-2 px-3 hover:bg-gray-100 rounded-lg text-sm font-medium transition-all"
                                        >
                                            Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/settings"
                                            className="py-2 px-3 hover:bg-gray-100 rounded-lg text-sm font-medium transition-all"
                                        >
                                            Settings
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/logout"
                                            className="py-2 px-3 hover:bg-red-100 text-red-600 rounded-lg text-sm font-medium transition-all"
                                        >
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
