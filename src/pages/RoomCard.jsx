import { Link } from "react-router-dom";

export default function RoomCard({ room }) {
    const { _id, name, price, imageUrl, description, facilities, status } = room;

    return (
        <>
            {status === 'Booked' ? (
                <div className="flex justify-center items-center mt-8 cursor-not-allowed">
                    <div className="max-w-sm rounded-lg overflow-hidden shadow-xl bg-gray-200 transition-transform transform">
                        {/* Room Image */}
                        <img
                            className="w-full h-48 object-cover rounded-t-lg opacity-50"
                            src={imageUrl}
                            alt={name}
                        />

                        {/* Room Details */}
                        <div className="p-6">
                            {/* Room Name */}
                            <h2 className="text-2xl font-bold text-gray-400 mb-2 truncate">{name}</h2>

                            {/* Room Description */}
                            <p className="text-gray-400 mb-4 text-sm">
                                {description && description.split(' ').slice(0, 25).join(' ')}...
                            </p>

                            {/* Price */}
                            <div className="text-xl text-red-400 font-bold mb-4">${price} per night</div>

                            {/* Facilities */}
                            <div className="mb-4 border-t border-b py-4">
                                <h3 className="text-gray-500 font-semibold mb-2 text-lg">Facilities:</h3>
                                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                                    {facilities?.slice(0, 3).map((facility, index) => (
                                        <div
                                            key={index}
                                            className="bg-gray-300 p-2 rounded-lg border border-gray-400"
                                        >
                                            {facility}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Availability Status */}
                            <div className="font-semibold mb-4 text-red-400">
                                {status}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <Link to={`/roomDetails/${_id}`}>
                    <div className="flex justify-center items-center mt-8">
                        <div className="max-w-sm rounded-lg overflow-hidden shadow-xl bg-white transition-transform transform hover:scale-105 hover:shadow-2xl">
                            {/* Room Image */}
                            <img
                                className="w-full h-48 object-cover rounded-t-lg"
                                src={imageUrl}
                                alt={name}
                            />

                            {/* Room Details */}
                            <div className="p-6">
                                {/* Room Name */}
                                <h2 className="text-2xl font-bold text-gray-800 mb-2 truncate">{name}</h2>

                                {/* Room Description */}
                                <p className="text-gray-600 mb-4 text-sm">
                                    {description && description.split(' ').slice(0, 25).join(' ')}...
                                </p>

                                {/* Price */}
                                <div className="text-xl text-red-500 font-bold mb-4">${price} per night</div>

                                {/* Facilities */}
                                <div className="mb-4 border-t border-b py-4">
                                    <h3 className="text-gray-800 font-semibold mb-2 text-lg">Facilities:</h3>
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                        {facilities?.slice(0, 3).map((facility, index) => (
                                            <div
                                                key={index}
                                                className="bg-gray-100 p-2 rounded-lg border border-gray-300"
                                            >
                                                {facility}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Availability Status */}
                                <div
                                    className={`font-semibold mb-4 ${status === 'Available' ? 'text-green-500' : 'text-red-500'
                                        }`}
                                >
                                    {status}
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            )}
        </>
    );
}
