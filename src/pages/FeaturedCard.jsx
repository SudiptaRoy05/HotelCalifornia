import { useNavigate } from "react-router-dom";

export default function FeaturedCard({ room }) {
    const { _id, name, price, imageUrl, description, facilities, status } = room;
    const navigate = useNavigate();

    const handleBookNow = () => {
        if (status === 'Available') {
            navigate(`/roomDetails/${_id}`);
        }
    };

    return (
        <div className="flex justify-center items-center mt-8">
            <div className={`max-w-sm rounded-lg overflow-hidden shadow-xl ${status === 'Booked' ? 'bg-gray-200' : 'bg-white'} transition-transform transform ${status !== 'Booked' ? 'hover:scale-105 hover:shadow-2xl' : ''}`}>
                {/* Room Image */}
                <img
                    className={`w-full h-48 object-cover rounded-t-lg ${status === 'Booked' ? 'opacity-50' : ''}`}
                    src={imageUrl}
                    alt={name}
                />

                {/* Room Details */}
                <div className="p-6">
                    {/* Room Name */}
                    <h2 className={`text-2xl font-bold ${status === 'Booked' ? 'text-gray-400' : 'text-gray-800'} mb-2 truncate`}>
                        {name}
                    </h2>

                    {/* Room Description */}
                    <p className={`mb-4 text-sm ${status === 'Booked' ? 'text-gray-400' : 'text-gray-600'}`}>
                        {description && description.split(' ').slice(0, 25).join(' ')}...
                    </p>

                    {/* Price */}
                    <div className={`text-xl font-bold mb-4 ${status === 'Booked' ? 'text-red-400' : 'text-red-500'}`}>
                        ${price} per night
                    </div>

                    {/* Facilities */}
                    <div className="mb-4 border-t border-b py-4">
                        <h3 className={`font-semibold mb-2 text-lg ${status === 'Booked' ? 'text-gray-500' : 'text-gray-800'}`}>
                            Facilities:
                        </h3>
                        <div className={`flex flex-wrap gap-4 text-sm ${status === 'Booked' ? 'text-gray-400' : 'text-gray-600'}`}>
                            {facilities?.slice(0, 3).map((facility, index) => (
                                <div
                                    key={index}
                                    className={`p-2 rounded-lg border ${status === 'Booked' ? 'bg-gray-300 border-gray-400' : 'bg-gray-100 border-gray-300'}`}
                                >
                                    {facility}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Availability Status */}
                    <div
                        className={`font-semibold mb-4 ${status === 'Available' ? 'text-green-500' : 'text-red-400'}`}
                    >
                        {status}
                    </div>

                    {/* Book Now Button */}
                    <button
                        onClick={handleBookNow}
                        disabled={status === 'Booked'}
                        className={`w-full py-2 rounded-lg transition-colors ${status === 'Booked' ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                    >
                        {status === 'Booked' ? 'Not Available' : 'Book Now'}
                    </button>
                </div>
            </div>
        </div>
    );
}
