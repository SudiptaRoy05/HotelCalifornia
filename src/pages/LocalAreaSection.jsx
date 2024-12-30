import React from 'react';

const attractions = [
    {
        name: "Beautiful Beach",
        description: "Relax on the sandy shores of our private beach.",
        image: "https://i.ibb.co/dfLc2Vj/beach.jpg",
        link: "#",
    },
    {
        name: "City Park",
        description: "Enjoy a family-friendly day at the lush city park.",
        image: "https://i.ibb.co/2tHy787/CityPark.webp",
    },
    {
        name: "Museum of Art",
        description: "Explore local history and art exhibitions.",
        image: "https://i.ibb.co/7yXF4YS/meau.webp",
    },
    {
        name: "Shopping District",
        description: "Shop for unique local products in the heart of the city.",
        image: "https://i.ibb.co/XY1PZtJ/shopping.webp",
    },
];

const LocalAreaSection = () => {
    return (
        <div className="bg-gray-50 py-16">
            <div className="container mx-auto px-6 w-11/12">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Explore Our Local Area</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {attractions.map((attraction, index) => (
                        <div key={index} className="relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all duration-300">
                            <img
                                src={attraction.image}
                                alt={attraction.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="absolute inset-0 bg-black opacity-25"></div>
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4">
                                <h3 className="text-xl font-semibold mb-2">{attraction.name}</h3>
                                <p className="text-sm mb-4">{attraction.description}</p>
                                <button className="bg-blue-500 text-white py-2 px-6 rounded-full text-sm hover:bg-blue-600 transition-all">
                                    Discover More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LocalAreaSection;
