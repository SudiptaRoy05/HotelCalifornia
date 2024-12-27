import axios from "axios";
import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";

export default function Rooms() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const fetchRoomData = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/rooms');
                setRooms(data);
            } catch (error) {
                console.error("Error fetching room data:", error);
            }
        };

        fetchRoomData();
    }, []);

    return (
        <div className="w-11/12 mx-auto py-8">
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">All Rooms</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {rooms.map(room => (
                    <RoomCard key={room._id} room={room}></RoomCard>
                ))}
            </div>
        </div>
    );
}
