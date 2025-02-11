import axios from "axios";
import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import FeaturedCard from "./FeaturedCard";
import useSecureAxios from "../hooks/useSecureAxios";
// import FeaturedRoomCard from "./FeaturedRoomCard";

export default function FeaturedRooms() {
    const axiosSecure = useSecureAxios()
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const fetchRoomData = async () => {
            try {
                const { data } = await axiosSecure.get(`${import.meta.env.VITE_API_URL}/top-rooms`);
                setRooms(data);
            } catch (error) {
                console.error("Error fetching room data:", error);
            }
        };

        fetchRoomData();
    }, []);

    return (
        <div className="py-4 px-4 w-10/12 mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Featured Rooms</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    rooms.map(room => <FeaturedCard key={room._id} room={room}></FeaturedCard>)
                }
            </div>
        </div>
    );
}
