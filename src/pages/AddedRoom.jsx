import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

export default function AddedRoom() {
    const { user } = useContext(AuthContext)

    const handleSubmit = (e) => {
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

        
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 p-6">
            <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
                    Add a New Room
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Room Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Room Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter room name"
                            className="mt-2 block w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Price (per night)</label>
                        <input
                            type="number"
                            name="price"
                            placeholder="Enter price"
                            className="mt-2 block w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            name="description"
                            rows="4"
                            placeholder="Describe the room features"
                            className="mt-2 block w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        ></textarea>
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Image URL</label>
                        <input
                            type="text"
                            name="imageUrl"
                            placeholder="Paste image URL here"
                            className="mt-2 block w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>

                    {/* Facilities */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Facilities</label>
                        <input
                            type="text"
                            name="facilities"
                            placeholder="e.g., Wi-Fi, Free Breakfast, Pool (separated by commas)"
                            className="mt-2 block w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                    </div>

                    {/* Room Type */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Room Type</label>
                        <select
                            name="roomType"
                            className="mt-2 block w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        >
                            <option value="Deluxe">Deluxe</option>
                            <option value="Standard">Standard</option>
                            <option value="Suite">Suite</option>
                        </select>
                    </div>

                    {/* Bed Type */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Bed Type</label>
                        <select
                            name="bedType"
                            className="mt-2 block w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
                            className="w-full px-4 py-2 text-lg font-medium text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                        >
                            Add Room
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
