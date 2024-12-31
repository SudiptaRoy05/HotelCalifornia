import axios from "axios";
import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import useSecureAxios from "../hooks/useSecureAxios";

export default function Rooms() {
    const axiosSecure = useSecureAxios()
    const [rooms, setRooms] = useState([]);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    // Fetch room data from the server
    const fetchRoomData = async (filterParams = {}) => {
        try {
            const { data } = await axiosSecure.get(`${import.meta.env.VITE_API_URL}/rooms`, {
                params: filterParams,
            });
            setRooms(data);
        } catch (error) {
            console.error("Error fetching room data:", error);
        }
    };

    useEffect(() => {
        fetchRoomData();
    }, []);

    const handleFilter = () => {
        fetchRoomData({ minPrice, maxPrice });
        setMinPrice(""); 
        setMaxPrice(""); 
    };

    const resetUi = () => {
        setMinPrice(""); 
        setMaxPrice(""); 
        fetchRoomData(); 
    };

    return (
        <div className="w-full flex flex-col items-center py-12 bg-gray-50">
            <Helmet>
                <title>Rooms - Hotel California</title>
                <meta name="description" content="Create your account at Hotel California and start booking your perfect stay today." />
            </Helmet>
            {/* Filter Section */}
            <div className="bg-white shadow-md rounded-md p-6 mb-12 w-11/12 max-w-3xl">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Filter by Price</h2>
                <p className="text-gray-600 text-center mb-6">
                    Specify the minimum and maximum price range to find suitable rooms.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                    {/* Min Price Input */}
                    <input
                        type="number"
                        placeholder="Min Price"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        className="w-full sm:w-1/3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {/* Max Price Input */}
                    <input
                        type="number"
                        placeholder="Max Price"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        className="w-full sm:w-1/3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {/* Apply Filter Button */}
                    <button
                        onClick={handleFilter}
                        className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-300"
                    >
                        Filter
                    </button>

                    {/* Reset Button */}
                    <button
                        onClick={resetUi}
                        className="w-full sm:w-auto px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-600 transition duration-300"
                    >
                        Reset
                    </button>
                </div>
            </div>

            {/* Room Cards Section */}
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-10">All Rooms</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 max-w-screen-xl">
                {rooms.map((room, index) => (
                    <motion.div
                        key={room._id}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <RoomCard room={room} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
