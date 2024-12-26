export default function Rooms() {
    return (
        <div className="flex justify-center items-center mt-8">
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105">
                {/* Room Image */}
                <img
                    className="w-full h-64 object-cover"
                    src="https://example.com/images/deluxe-king-room.jpg"
                    alt="Deluxe King Room"
                />

                {/* Room Details */}
                <div className="p-6">
                    {/* Room Name */}
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Deluxe King Room</h2>

                    {/* Room Description */}
                    <p className="text-gray-600 mb-4">Spacious room with modern amenities and a stunning city view.</p>

                    {/* Price */}
                    <div className="text-2xl text-red-600 font-bold mb-4">$200 per night</div>

                    {/* Amenities List */}
                    <ul className="list-none space-y-2 mb-4">
                        <li className="text-sm text-gray-700">Wi-Fi</li>
                        <li className="text-sm text-gray-700">TV</li>
                        <li className="text-sm text-gray-700">Minibar</li>
                        <li className="text-sm text-gray-700">Coffee Maker</li>
                        <li className="text-sm text-gray-700">Room Service</li>
                    </ul>

                    {/* Availability Status */}
                    <div className="text-green-500 font-semibold mb-4">Available Now</div>

                    {/* Room Rating */}
                    <div className="text-yellow-500 font-semibold mb-4">Rating: 4.8/5</div>

                    {/* Book Now Button */}
                    <a
                        href="#"
                        className="block w-full py-2 text-center bg-blue-600 text-white font-semibold rounded-lg transition-colors hover:bg-blue-500"
                    >
                        Book Now
                    </a>
                </div>
            </div>
        </div>
    );
}
