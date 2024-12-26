import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import your images
import bed from '../../src/assets/images/bed.jpg';
import bed1 from '../../src/assets/images/bed1.jpg';
import bed2 from '../../src/assets/images/bed2.jpg';

const Banner = () => {
    const navigate = useNavigate();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
    };

    const handleClick = () => {
        navigate("/rooms");
    };

    return (
        <div className="relative w-11/12 mx-auto">
            <Slider {...settings}>
                {/* Slide 1 */}
                <div className="banner-slide w-full h-[300px] sm:h-[400px] md:h-[500px] text-white text-center py-12 sm:py-16 relative">
                    <img
                        src={bed}
                        alt="Hotel Room 1"
                        className="w-full h-full object-cover absolute inset-0"
                    />
                    <div className="overlay absolute inset-0 bg-black opacity-40"></div>
                    <div className="relative z-10 max-w-xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                            Welcome to Hotel California
                        </h2>
                        <p className="text-sm sm:text-lg mb-6">
                            Experience comfort, luxury, and a world-class stay in the heart of the city.
                        </p>
                        <button
                            onClick={handleClick}
                            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg transition-colors"
                        >
                            View Rooms
                        </button>
                    </div>
                </div>

                {/* Slide 2 */}
                <div className="banner-slide w-full h-[300px] sm:h-[400px] md:h-[500px] text-white text-center py-12 sm:py-16 relative">
                    <img
                        src={bed1}
                        alt="Hotel Room 2"
                        className="w-full h-full object-cover absolute inset-0"
                    />
                    <div className="overlay absolute inset-0 bg-black opacity-40"></div>
                    <div className="relative z-10 max-w-xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                            Relax and Unwind
                        </h2>
                        <p className="text-sm sm:text-lg mb-6">
                            Let go of your stress with our premium amenities and exceptional service.
                        </p>
                        <button
                            onClick={handleClick}
                            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg transition-colors"
                        >
                            View Rooms
                        </button>
                    </div>
                </div>

                {/* Slide 3 */}
                <div className="banner-slide w-full h-[300px] sm:h-[400px] md:h-[500px] text-white text-center py-12 sm:py-16 relative">
                    <img
                        src={bed2}
                        alt="Hotel Room 3"
                        className="w-full h-full object-cover absolute inset-0"
                    />
                    <div className="overlay absolute inset-0 bg-black opacity-40"></div>
                    <div className="relative z-10 max-w-xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                            Your Perfect Getaway
                        </h2>
                        <p className="text-sm sm:text-lg mb-6">
                            Discover the best rooms and vacation packages tailored to your needs.
                        </p>
                        <button
                            onClick={handleClick}
                            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg transition-colors"
                        >
                            View Rooms
                        </button>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Banner;
