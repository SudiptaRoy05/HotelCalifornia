import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import useSecureAxios from "../hooks/useSecureAxios";

export default function Testimonials() {
    const axiosSecure = useSecureAxios();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const { data } = await axiosSecure.get(`${import.meta.env.VITE_API_URL}/all-review`);
                setReviews(data); // Reviews are already sorted from the server
            } catch (error) {
                console.error("Failed to fetch reviews:", error);
            }
        };

        fetchReviews();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="w-full py-16 bg-gray-300">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">What Our Customers Say</h2>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {reviews.length > 0 ? (
                    <Slider {...settings}>
                        {reviews.map((review) => (
                            <div key={review._id} className="px-4">
                                <div className="p-8 bg-white shadow-xl rounded-lg transform transition-all duration-300 hover:scale-105">
                                    <p className="text-gray-700 text-xl italic mb-6">"{review.comment}"</p>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h4 className="text-gray-900 font-bold text-2xl">{review.user}</h4>
                                            <p className="text-sm text-gray-600 mt-1">
                                                {new Date(review.timestamp).toLocaleDateString()}
                                            </p>
                                        </div>
                                        <span className="text-yellow-500 text-2xl font-bold">
                                            {Array(review.rating)
                                                .fill("★")
                                                .join("")}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <p className="text-center text-gray-500 text-xl">No reviews available at the moment.</p>
                )}
            </div>
        </div>
    );
}