import axios from "axios";
import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";

export default function FeaturedRooms() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const fetchRoomData = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/top-rooms');
                setRooms(data);
            } catch (error) {
                console.error("Error fetching room data:", error);
            }
        };

        fetchRoomData();
    }, []);

    return (
        <div className="py-8 px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Featured Rooms</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    rooms.map(room => <RoomCard key={room._id} room={room}></RoomCard>)
                }
            </div>
        </div>
    );
}
