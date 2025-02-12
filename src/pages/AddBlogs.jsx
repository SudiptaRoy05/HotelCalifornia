import toast from "react-hot-toast";
import useSecureAxios from "../hooks/useSecureAxios";
import axios from "axios";

export default function AddBlogs() {
    const axiosSecure = useSecureAxios();
    const handleSubmit = async e => {
        e.preventDefault();
        const image = e.target.imageUrl.value;
        const title = e.target.title.value;
        const description = e.target.description.value;

        const newBlog = { image, title, description };

        try {
            // await axiosSecure.post(`${import.meta.env.VITE_API_URL}/add-blogs`, newBlog);
            await axios.post(`${import.meta.env.VITE_API_URL}/add-blogs`, newBlog)
            toast.success('Blog added successfully');
            e.target.reset();
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="bg-gray-100">
            <div className="max-w-2xl bg-white mx-auto mt-16 p-10 shadow-xl rounded-2xl border border-gray-300">
                <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Add a New Blog</h2>
                <form className="space-y-8" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-gray-800 font-semibold mb-2">Image URL</label>
                        <input type="text" name="imageUrl" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none shadow-sm" placeholder="Enter image URL" />
                    </div>
                    <div>
                        <label className="block text-gray-800 font-semibold mb-2">Title</label>
                        <input type="text" name="title" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none shadow-sm" placeholder="Enter blog title" />
                    </div>
                    <div>
                        <label className="block text-gray-800 font-semibold mb-2">Description</label>
                        <textarea name="description" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none shadow-sm" placeholder="Enter blog description" rows="6"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-600 transition-all shadow-md">
                        Submit Blog
                    </button>
                </form>
            </div>
        </div>
    );
}
