import { Link } from "react-router-dom";

export default function RoomCard({ room }) {
    const { _id, name, price, imageUrl, description, status } = room || {};

    return (
        <>
            {status === 'Booked' ? (
                <div className="flex justify-center items-center mt-8 cursor-not-allowed">
                    <div className="max-w-sm w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 transition-transform transform hover:shadow-xl">
                        {/* Room Image */}
                        <img
                            className="w-full h-56 object-cover rounded-t-lg opacity-70"
                            src={imageUrl}
                            alt={name}
                        />

                        {/* Room Details */}
                        <div className="p-6">
                            {/* Room Name */}
                            <h2 className="text-2xl font-bold text-gray-500 mb-2 truncate">{name}</h2>

                            {/* Room Description */}
                            <p className="text-gray-500 mb-4 text-sm">
                                {description && description.split(' ').slice(0, 15).join(' ')}...
                            </p>

                            {/* Price */}
                            <div className="text-xl text-gray-500 font-bold mb-4">${price} per night</div>

                            {/* Facilities
                            <div className="mb-4 border-t border-b border-gray-300 py-4">
                                <h3 className="text-gray-600 font-semibold mb-2 text-lg">Facilities:</h3>
                                <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                                    {facilities?.slice(0, 3).map((facility, index) => (
                                        <div
                                            key={index}
                                            className="bg-gray-200 p-2 rounded-lg"
                                        >
                                            {facility}
                                        </div>
                                    ))}
                                </div>
                            </div> */}

                            {/* Availability Status */}
                            <div className="font-semibold mb-4 text-gray-500">
                                {status}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <Link to={`/roomDetails/${_id}`} className="block">
                    <div className="flex justify-center items-center mt-8">
                        <div className="max-w-sm w-full rounded-lg overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105 hover:shadow-xl">
                            {/* Room Image */}
                            <img
                                className="w-full h-56 object-cover rounded-t-lg"
                                src={imageUrl}
                                alt={name}
                            />

                            {/* Room Details */}
                            <div className="p-6">
                                {/* Room Name */}
                                <h2 className="text-2xl font-bold text-gray-800 mb-2 truncate">{name}</h2>

                                {/* Room Description */}
                                <p className="text-gray-600 mb-4 text-sm">
                                    {description && description.split(' ').slice(0, 15).join(' ')}...
                                </p>

                                {/* Price */}
                                <div className="text-xl text-blue-700 font-bold mb-4">${price} Per Night</div>

                                {/* Facilities */}
                                {/* <div className="mb-4 border-t border-b border-gray-200 py-4">
                                    <h3 className="text-gray-800 font-semibold mb-2 text-lg">Facilities:</h3>
                                    <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                                        {facilities?.slice(0, 3).map((facility, index) => (
                                            <div
                                                key={index}
                                                className="bg-gray-100 p-2 rounded-lg"
                                            >
                                                {facility}
                                            </div>
                                        ))}
                                    </div>
                                </div> */}

                                {/* Availability Status */}
                                <div
                                    className={`font-semibold mb-4 ${status === 'Available' ? 'text-green-600' : 'text-red-600'
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