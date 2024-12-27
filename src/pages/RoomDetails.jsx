import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function RoomDetails() {
    const [room, setRoom] = useState({});
    const { name, price, description, imageUrl, facilities, roomType, bedType, status, review } = room;

    const { id } = useParams()
    // Extract the room ID from the URL or context (if needed)
    // Example: const { id } = useParams(); or any other way to get the ID

    useEffect(() => {
        const fetchRoomData = async () => {
            try {
                const { data } = await axios.get(`http://localhost:5000/room-details/${id}`);
                setRoom(data);
                console.log(data)
            } catch (error) {
                console.error("Error fetching room data:", error);
            }
        };

        if (id) {
            fetchRoomData();
        }
    }, [id]);

    return (
        <div className="py-8 px-4">
            {/* Room Details Card */}
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Room Image */}
                <img
                    className="w-full h-96 object-cover"
                    src={imageUrl}
                    alt={name}
                />

                {/* Room Info */}
                <div className="p-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">{name}</h2>
                    <div className="text-xl text-red-500 font-semibold mb-4">${price} per night</div>

                    {/* Room Description */}
                    <p className="text-gray-600 mb-4">{description}</p>

                    {/* Room Type and Bed Type */}
                    <div className="text-sm text-gray-600 mb-4">
                        <span className="font-semibold">Room Type:</span> {roomType}
                        <span className="mx-2">|</span>
                        <span className="font-semibold">Bed Type:</span> {bedType}
                    </div>

                    {/* Facilities */}
                    <div className="mb-4">
                        <h3 className="text-gray-800 font-semibold mb-2">Facilities:</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            {facilities?.slice(0, 3).map((facility, index) => (
                                <div key={index} className="bg-gray-100 p-2 rounded-lg border border-gray-300">
                                    {facility}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Status */}
                    <div
                        className={`font-semibold mb-4 ${status === 'Available' ? 'text-green-500' : 'text-red-500'}`}
                    >
                        {status}
                    </div>

                    {/* Reviews */}
                    <div className="mt-4">
                        <h3 className="text-gray-800 font-semibold mb-2">Reviews:</h3>
                        {review?.map((rev, index) => (
                            <div key={index} className="mb-2">
                                <p className="font-semibold">{rev.user}:</p>
                                <p className="text-gray-600">{rev.comment}</p>
                                <div className="text-yellow-500">Rating: {rev.rating} / 5</div>
                            </div>
                        ))}
                    </div>

                    {/* Book Now Button */}
                    <a
                        href="#"
                        className="block w-full py-3 text-center bg-blue-600 text-white font-semibold rounded-lg transition-colors hover:bg-blue-500 mt-6"
                    >
                        Book Now
                    </a>
                </div>
            </div>
        </div>
    );
}
