import React from "react";
import { FaSwimmingPool, FaDumbbell, FaSpa, FaBusinessTime, FaChild, FaUmbrellaBeach } from "react-icons/fa";
import { IoRestaurant } from "react-icons/io5";

const amenities = [
    {
        icon: <FaSwimmingPool className="text-4xl text-blue-500" />,
        title: "Swimming Pool",
        description: "Relax in our outdoor pool with stunning views.",
        image: "https://i.ibb.co.com/NL1dJ66/pool.jpg",
    },
    {
        icon: <FaDumbbell className="text-4xl text-gray-700" />,
        title: "Gym",
        description: "Stay fit with our fully-equipped fitness center.",
        image: "https://i.ibb.co.com/CKm6nZr/gym.jpg",
    },
    {
        icon: <FaSpa className="text-4xl text-purple-500" />,
        title: "Spa",
        description: "Unwind with luxurious spa treatments.",
        image: "https://i.ibb.co.com/q0dr8sR/Spa.jpg",
    },
    {
        icon: <FaBusinessTime className="text-4xl text-green-500" />,
        title: "Conference Rooms",
        description: "Host your meetings in our modern conference rooms.",
        image: "https://i.ibb.co.com/xFTXf43/Conference-Room.jpg",
    },
    {
        icon: <IoRestaurant className="text-4xl text-orange-500" />,
        title: "Restaurant",
        description: "Enjoy gourmet meals at our on-site restaurant.",
        image: "https://i.ibb.co.com/NyRDSbz/res2rent.webp",
    },
    {
        icon: <FaUmbrellaBeach className="text-4xl text-yellow-500" />,
        title: "Beachside Dining",
        description: "Dine with a view at our exclusive beachside location.",
        image: "https://i.ibb.co.com/4WsQqdK/dining.jpg",
    },
    {
        icon: <FaChild className="text-4xl text-pink-500" />,
        title: "Kids Play Area",
        description: "A fun and safe space for children to play.",
        image: "https://i.ibb.co.com/1TL0nDQ/kids.jpg",
    },
];

const AmenitiesSection = () => {
    return (
        <div className="bg-gray-50 py-12">
            <div className="container mx-auto px-4 w-11/12">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Amenities</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {amenities.map((amenity, index) => (
                        <div
                            key={index}
                            className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
                        >
                            <img
                                src={amenity.image}
                                alt={amenity.title}
                                className="w-full h-48 object-cover opacity-70"
                            />
                            <div className="absolute inset-0 bg-black opacity-25"></div>
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 py-6">
                                <div className="mb-4">{amenity.icon}</div>
                                <h3 className="text-2xl font-semibold mb-2">{amenity.title}</h3>
                                <p className="text-sm">{amenity.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AmenitiesSection;
