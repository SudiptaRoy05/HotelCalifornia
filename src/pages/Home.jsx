import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Map from "../components/map";
import FeaturedRooms from "./FeaturedRooms";
import image from '../../src/assets/images/modal.jpg'

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
        <div>
            {/* Modal */}
            {isModalOpen && (
                <div className="modal modal-open">
                    <div className="modal-box">
                        <h2 className="text-2xl font-bold mb-4 text-center">
                            Special Offers & Promotions 🎉
                        </h2>
                        <img
                            src={image}
                            alt="Special Offer"
                            className="rounded-lg mb-4"
                        />
                        <p className="text-lg text-center">
                            Enjoy exclusive discounts on our premium rooms! Book now and get up to{" "}
                            <strong>50% off</strong>.
                        </p>
                        <div className="modal-action">
                            <button
                                onClick={closeModal}
                                className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
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
            </main>
        </div>
    );
}
