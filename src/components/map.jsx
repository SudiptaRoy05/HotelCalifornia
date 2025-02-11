export default function Map() {
    const hotelLocation = { lat: 34.1030032, lng: -118.4104684 }; // Coordinates for Hotel California (Los Angeles, CA)
    const zoomLevel = 16; // Closer view of the location

    return (
        <div className="w-10/12 mx-auto">
            <div className="text-center my-10 font-sans">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Our Location</h2>
                <p className="text-gray-600 text-base md:text-lg mb-5">
                    Welcome to Hotel California. Below is our location on the map:
                </p>
                <div className="w-full max-w-full mx-auto h-[400px] rounded-lg overflow-hidden shadow-lg border border-gray-300">
                    <iframe
                        className="w-full h-full border-none"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        src={`https://www.openstreetmap.org/export/embed.html?bbox=${hotelLocation.lng - 0.01
                            },${hotelLocation.lat - 0.01},${hotelLocation.lng + 0.01},${hotelLocation.lat + 0.01
                            }&layer=mapnik&marker=${hotelLocation.lat},${hotelLocation.lng}&zoom=${zoomLevel}`}
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
