import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Map from "../components/map";
import FeaturedRooms from "./FeaturedRooms";
import image from '../../src/assets/images/modal.jpg';
import AllReview from "../components/AllReview";
import { Helmet } from "react-helmet";
import AmenitiesSection from "../components/AmenitiesSection";
import LocalAreaSection from "./LocalAreaSection";
import Blog from "./Blog";

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        // Open the modal when the component mounts
        setIsModalOpen(true);
    }, []);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="bg-gray-100">
            <Helmet>
                <title>Home - Hotel California</title>
                <meta name="description" content="Create your account at Hotel California and start booking your perfect stay today." />
            </Helmet>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden w-11/12 md:w-3/4 lg:w-1/2 xl:w-1/3 transform transition-all duration-300 ease-in-out">

                        {/* Modal Header */}
                        <div className="bg-blue-600 p-5">
                            <h2 className="text-2xl font-semibold text-white text-center">
                                Special Offers & Promotions 🎉
                            </h2>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6">
                            <img
                                src={image}
                                alt="Special Offer"
                                className="rounded-lg mb-5 w-full h-48 object-cover"
                            />
                            <p className="text-lg text-gray-800 text-center leading-relaxed">
                                Enjoy exclusive discounts on our premium rooms! Book now and get up to{" "}
                                <strong className="text-blue-600">50% off</strong>.
                            </p>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-5 flex justify-center border-t">
                            <button
                                onClick={closeModal}
                                className="px-6 py-2 bg-blue-600 text-white text-lg font-medium rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <header>
                <Banner />
            </header>
            <main>
                <section>
                    <Map />
                </section>
                <section>
                    <FeaturedRooms />
                </section>
                <section>
                    <Blog></Blog>
                </section>
                <section>
                    <AllReview />
                </section>
                <section>
                    <AmenitiesSection />
                </section>
                <section>
                    <LocalAreaSection />
                </section>
            </main>
        </div>
    );
}
