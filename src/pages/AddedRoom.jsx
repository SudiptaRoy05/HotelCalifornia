import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";
import { Helmet } from "react-helmet";
// import { useNavigate } from "react-router-dom";

export default function AddedRoom() {
    const { user } = useContext(AuthContext);
    // const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        const name = form.get('name');
        const price = form.get('price');
        const description = form.get('description');
        const imageUrl = form.get('imageUrl');
        const facilities = form.get('facilities');
        const roomType = form.get('roomType');
        const bedType = form.get('bedType');
        const status = "Available";
        
        


        const userInfo = {
            name: user?.displayName,
            email: user?.email,
        };

        const newRoom = {
            name,
            price: parseFloat(price),
            description,
            imageUrl,
            facilities: facilities.split(',').map((facility) => facility.trim()),
            roomType,
            bedType,
            userInfo,
            status,
        };

        console.log('New Room:', newRoom);

        try {
            await axios.post(`http://localhost:5000/add-rooms`, newRoom);
            toast.success('Room added successfully');
            // navigate('/myaddedroom');
            e.target.reset();
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-bl from-indigo-400 via-purple-500 to-pink-500 p-6">
            <Helmet>
                <title>Add Room - Hotel California</title>
                <meta name="description" content="Create your account at Hotel California and start booking your perfect stay today." />
            </Helmet>
            <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-8 transform transition hover:scale-105">
                <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 mb-8">
                    Add a New Room
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Room Name */}
                    <div>
                        <label className="block text-lg font-medium text-gray-700">Room Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter room name"
                            className="mt-2 block w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block text-lg font-medium text-gray-700">Price (per night)</label>
                        <input
                            type="number"
                            name="price"
                            placeholder="Enter price"
                            className="mt-2 block w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-lg font-medium text-gray-700">Description</label>
                        <textarea
                            name="description"
                            rows="4"
                            placeholder="Describe the room features"
                            className="mt-2 block w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        ></textarea>
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="block text-lg font-medium text-gray-700">Image URL</label>
                        <input
                            type="text"
                            name="imageUrl"
                            placeholder="Paste image URL here"
                            className="mt-2 block w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                    </div>

                    {/* Facilities */}
                    <div>
                        <label className="block text-lg font-medium text-gray-700">Facilities</label>
                        <input
                            type="text"
                            name="facilities"
                            placeholder="e.g., Wi-Fi, Free Breakfast, Pool"
                            className="mt-2 block w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                    </div>

                    {/* Room Type */}
                    <div>
                        <label className="block text-lg font-medium text-gray-700">Room Type</label>
                        <select
                            name="roomType"
                            className="mt-2 block w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                            <option value="Deluxe">Deluxe</option>
                            <option value="Standard">Standard</option>
                            <option value="Suite">Suite</option>
                        </select>
                    </div>

                    {/* Bed Type */}
                    <div>
                        <label className="block text-lg font-medium text-gray-700">Bed Type</label>
                        <select
                            name="bedType"
                            className="mt-2 block w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                            <option value="King">King</option>
                            <option value="Queen">Queen</option>
                            <option value="Single">Single</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg hover:shadow-2xl hover:from-pink-500 hover:to-purple-500 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-300"
                        >
                            Add Room
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
