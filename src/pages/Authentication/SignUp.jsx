import { Player } from "@lottiefiles/react-lottie-player";
import signupAnimation from "../../assets/lottie/signup.json"; // Ensure the path is correct
import { FcGoogle } from "react-icons/fc";

export default function SignUp() {
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
            <div className="flex flex-col lg:flex-row items-center w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
                {/* Lottie Animation */}
                <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
                    <Player
                        autoplay
                        loop
                        src={signupAnimation} // Use imported JSON animation
                        className="w-80 h-80"
                    />
                </div>

                {/* Registration Form */}
                <div className="w-full lg:w-1/2">
                    {/* Page Title */}
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                        Register
                    </h2>

                    <form>
                        {/* Name Field */}
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring focus:ring-blue-400"
                                placeholder="Enter your name"
                            />
                        </div>

                        {/* Email Field */}
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring focus:ring-blue-400"
                                placeholder="Enter your email"
                            />
                        </div>

                        {/* Photo URL Field */}
                        <div className="mb-4">
                            <label
                                htmlFor="photoURL"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Photo URL
                            </label>
                            <input
                                type="text"
                                id="photoURL"
                                className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring focus:ring-blue-400"
                                placeholder="Enter photo URL"
                            />
                        </div>

                        {/* Password Field */}
                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring focus:ring-blue-400"
                                placeholder="Enter your password"
                            />
                            <p className="text-sm text-gray-500 mt-1">
                                Password must have an uppercase letter, a lowercase letter, and
                                be at least 6 characters long.
                            </p>
                        </div>

                        {/* Submit Button */}
                        <div className="mb-4">
                            <button
                                type="button"
                                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                            >
                                Register
                            </button>
                        </div>
                    </form>

                    {/* Google Sign-In Option */}
                    <div className="flex justify-center items-center my-4">
                        <div className="border-t border-gray-300 w-full"></div>
                        <p className="mx-4 text-gray-500">OR</p>
                        <div className="border-t border-gray-300 w-full"></div>
                    </div>
                    <button
                        type="button"
                        className="w-full flex justify-center items-center bg-gray-100 text-gray-700 border rounded-lg py-2 hover:bg-gray-200 transition-colors"
                    >
                        <FcGoogle className="text-2xl mr-2" />
                        Sign in with Google
                    </button>

                    {/* Link to Login Page */}
                    <p className="text-sm text-center text-gray-600 mt-6">
                        Already have an account?{" "}
                        <a
                            href="#"
                            className="text-blue-500 hover:text-blue-700 font-medium"
                        >
                            Login here
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
