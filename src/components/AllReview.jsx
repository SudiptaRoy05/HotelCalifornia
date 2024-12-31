import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import useSecureAxios from "../hooks/useSecureAxios";

export default function Testimonials() {
    const axiosSecure = useSecureAxios()
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
    };

    return (
        <div className="w-full py-10 bg-gray-100">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">What Our Customers Say</h2>
            <div className="max-w-3xl mx-auto">
                {reviews.length > 0 ? (
                    <Slider {...settings}>
                        {reviews.map((review) => (
                            <div key={review._id} className="p-6 bg-white shadow-lg rounded-lg">
                                <p className="text-gray-700 text-xl italic mb-4">"{review.comment}"</p>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="text-gray-900 font-bold">{review.user}</h4>
                                        <p className="text-sm text-gray-600">{new Date(review.timestamp).toLocaleDateString()}</p>
                                    </div>
                                    <span className="text-yellow-500 text-lg font-bold">
                                        {Array(review.rating)
                                            .fill("★")
                                            .join("")}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <p className="text-center text-gray-500">No reviews available at the moment.</p>
                )}
            </div>
        </div>
    );
}
