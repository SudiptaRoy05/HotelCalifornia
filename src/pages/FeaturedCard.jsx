import { useNavigate } from "react-router-dom";

export default function FeaturedCard({ room }) {
    const { _id, name, price, imageUrl, description, status } = room;
    const navigate = useNavigate();

    const handleBookNow = () => {
        if (status === 'Available') {
            navigate(`/roomDetails/${_id}`);
        }
    };

    return (
        <div className="flex justify-center items-center">
            <div className={`w-80 rounded-xl overflow-hidden shadow-md ${status === 'Booked' ? 'bg-gray-100' : 'bg-white'} transition-all transform hover:scale-105`}>
                {/* Room Image */}
                <div className="relative">
                    <img className="w-full h-40 object-cover rounded-t-xl" src={imageUrl} alt={name} />
                    {status === 'Booked' && (
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                            <span className="text-white font-semibold text-lg">Booked</span>
                        </div>
                    )}
                </div>

                {/* Room Details */}
                <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-800 truncate">{name}</h2>
                    <p className="text-sm text-gray-500 truncate">{description?.split(' ').slice(0, 15).join(' ')}...</p>

                    {/* Price */}
                    <div className="text-lg font-bold text-red-500 mt-2">${price} / night</div>

                    {/* Facilities
                    <div className="mt-3">
                        <h3 className="text-sm font-medium text-gray-700">Facilities:</h3>
                        <div className="flex flex-wrap gap-2 mt-1 text-xs text-gray-600">
                            {facilities?.slice(0, 3).map((facility, index) => (
                                <span key={index} className="px-2 py-1 bg-gray-200 rounded-md">
                                    {facility}
                                </span>
                            ))}
                        </div>
                    </div> */}

                    {/* Book Now Button */}
                    <button
                        onClick={handleBookNow}
                        disabled={status === 'Booked'}
                        className={`w-full mt-4 py-2 rounded-md text-sm font-medium transition ${status === 'Booked' ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                    >
                        {status === 'Booked' ? 'Not Available' : 'Book Now'}
                    </button>
                </div>
            </div>
        </div>
    );
}
