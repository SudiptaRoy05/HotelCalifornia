
import { Link } from "react-router-dom";

export default function Error() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
            {/* Animated GIF or Image */}
            <img
                src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
                alt="Page Not Found"
                className="w-72 h-72 object-cover mb-6"
            />

            {/* Error Message */}
            <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
            <p className="text-lg text-gray-600 mb-6">
                Oops! The page you are looking for doesn’t exist or has been moved.
            </p>

            {/* Back to Home Button */}
            <Link
                to="/"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            >
                Back to Home
            </Link>
        </div>
    );
}
