import { Player } from "@lottiefiles/react-lottie-player";
import signupAnimation from "../../assets/lottie/signup.json";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

export default function SignUp() {
    const { createUser, updateUserProfile, setUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = async e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name');
        const email = form.get('email');
        const photoURL = form.get('photoURL');
        const password = form.get('password');

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            toast.error(
                "Password must be at least 6 characters long, include at least one uppercase letter, and one lowercase letter."
            );
            return;
        }
        try {
            const result = await createUser(email, password);
            console.log(result);
            await updateUserProfile(name, photoURL);
            setUser({ ...result.user, photoURL: photoURL, displayName: name });
            toast.success('Signup Successful'); 
            navigate('/');
        } catch (err) {
            console.log(err);
            toast.error(err?.message);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle()

            toast.success('Signin Successful')
            navigate('/')
        } catch (err) {
            console.log(err)
            toast.error(err?.message)
        }
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
            <Helmet>
                <title>Register - Hotel California</title>
                <meta name="description" content="Create your account at Hotel California and start booking your perfect stay today." />
            </Helmet>
            <div className="flex flex-col lg:flex-row items-center w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
                <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
                    <Player
                        autoplay
                        loop
                        src={signupAnimation}
                        className="w-80 h-80"
                    />
                </div>

                <div className="w-full lg:w-1/2">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                        Register
                    </h2>

                    <form onSubmit={handleSignUp}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring focus:ring-blue-400"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring focus:ring-blue-400"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700 mb-1">
                                Photo URL
                            </label>
                            <input
                                type="text"
                                name="photoURL"
                                className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring focus:ring-blue-400"
                                placeholder="Enter photo URL"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring focus:ring-blue-400"
                                placeholder="Enter your password"
                            />
                            <p className="text-sm text-gray-500 mt-1">
                                Password must have an uppercase letter, a lowercase letter, and
                                be at least 6 characters long.
                            </p>
                        </div>

                        <div className="mb-4">
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                            >
                                Register
                            </button>
                        </div>
                    </form>

                    <div className="flex justify-center items-center my-4">
                        <div className="border-t border-gray-300 w-full"></div>
                        <p className="mx-4 text-gray-500">OR</p>
                        <div className="border-t border-gray-300 w-full"></div>
                    </div>
                    <button
                        onClick={handleGoogleSignIn}
                        type="button"
                        className="w-full flex justify-center items-center bg-gray-100 text-gray-700 border rounded-lg py-2 hover:bg-gray-200 transition-colors"
                    >
                        <FcGoogle className="text-2xl mr-2" />
                        Sign in with Google
                    </button>

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
