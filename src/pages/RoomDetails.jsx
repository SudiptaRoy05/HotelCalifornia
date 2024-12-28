import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { AuthContext } from "../Provider/AuthProvider";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "react-modal";
import toast from "react-hot-toast";  // Importing React Hot Toast

Modal.setAppElement('#root');

export default function RoomDetails() {
    const { user } = useContext(AuthContext);
    const [room, setRoom] = useState({});
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState({ user: "", email: "", comment: "", rating: 0 });
    const [showModal, setShowModal] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchRoomData = async () => {
            try {
                const { data } = await axios.get(`http://localhost:5000/room-details/${id}`);
                setRoom(data);
            } catch (error) {
                console.error("Error fetching room data:", error);
                toast.error("Error fetching room details.");
            }
        };

        if (id) {
            fetchRoomData();
        }
    }, [id]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const { data } = await axios.get(`http://localhost:5000/review/${id}`);
                if (data.length === 0) {
                    toast.info("No reviews available for this room.");
                } else {
                    setReviews(data);
                }
            } catch (error) {
                console.error("Error fetching reviews:", error);
                toast.error("There was an error fetching the reviews.");
            }
        };

        fetchReviews();
    }, [id]);

    useEffect(() => {
        if (user) {
            setNewReview((prev) => ({
                ...prev,
                user: user.displayName || "Anonymous",
                email: user.email || "",
            }));
        }
    }, [user]);

    const handleAddReview = async () => {
        if (!newReview.user || !newReview.comment || !newReview.rating || !newReview.email) {
            toast.error("Please fill in all fields!");
            return;
        }
        try {
            const reviewWithRoomId = { ...newReview, roomId: id };
            await axios.post(`http://localhost:5000/add-review/${id}`, reviewWithRoomId);
            setReviews([...reviews, reviewWithRoomId]);
            setNewReview({ user: user?.displayName || "", email: user?.email || "", comment: "", rating: 0 });
            toast.success("Review added successfully!");
        } catch (error) {
            console.error("Error submitting review:", error);
            toast.error("Error submitting your review.");
        }
    };

    const handleBookNow = () => {
        setShowModal(true);
    };

    const handleConfirmBooking = () => {
        if (!selectedDate) {
            toast.error("Please select a booking date!");
            return;
        }
        toast.success(`Room booked for ${selectedDate.toLocaleDateString()}`);
        setShowModal(false);
    };

    const { name, price, description, imageUrl, facilities, roomType, bedType, status } = room;

    return (
        <div className="py-8 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                <img className="w-full h-96 object-cover" src={imageUrl} alt={name} />
                <div className="p-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">{name}</h2>
                    <div className="text-xl text-red-500 font-semibold mb-4">${price} per night</div>
                    <p className="text-gray-600 mb-4">{description}</p>
                    <div className="text-sm text-gray-600 mb-4">
                        <span className="font-semibold">Room Type:</span> {roomType} | <span className="font-semibold">Bed Type:</span> {bedType}
                    </div>
                    <div className="mb-4">
                        <h3 className="text-gray-800 font-semibold mb-2">Facilities:</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            {facilities?.map((facility, idx) => (
                                <div key={idx} className="bg-gray-100 p-2 rounded-lg border border-gray-300">
                                    {facility}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={`font-semibold mb-4 ${status === 'Available' ? 'text-green-500' : 'text-red-500'}`}>
                        {status}
                    </div>
                    <button
                        onClick={handleBookNow}
                        className="block w-full py-3 text-center bg-blue-600 text-white font-semibold rounded-lg transition-colors hover:bg-blue-500 mt-6"
                    >
                        Book Now
                    </button>

                    <div className="mt-4">
                        <h3 className="text-gray-800 font-semibold mb-2">Reviews:</h3>
                        {reviews.length > 0 ? (
                            reviews.map((rev, idx) => (
                                <div key={idx} className="mb-4 border-b pb-4">
                                    <p className="font-semibold">{rev.user} ({rev.email})</p>
                                    <p className="text-gray-600">{rev.comment}</p>
                                    <ReactStars value={rev.rating} count={5} size={20} edit={false} activeColor="#ffd700" />
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 italic">No reviews available for this room.</p>
                        )}
                    </div>

                    <div className="mt-8">
                        <h3 className="text-gray-800 font-semibold mb-4">Add Your Review:</h3>
                        <textarea
                            placeholder="Your Comment"
                            value={newReview.comment}
                            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                            className="w-full mb-4 p-3 border rounded-lg"
                        ></textarea>
                        <div className="mb-4">
                            <label className="font-semibold mb-2 block">Your Rating:</label>
                            <ReactStars
                                value={newReview.rating || 0}
                                count={5}
                                size={20}
                                edit={true}
                                activeColor="#ffd700"
                                onChange={(newRating) => setNewReview({ ...newReview, rating: newRating })}
                            />
                        </div>
                        <button
                            onClick={handleAddReview}
                            className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-400 transition"
                        >
                            Submit Review
                        </button>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={showModal}
                onRequestClose={() => setShowModal(false)}
                contentLabel="Room Booking Modal"
                className="w-full max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg relative"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            >
                <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>
                <div className="mb-4">
                    <p><strong>Room:</strong> {name}</p>
                    <p><strong>Price:</strong> ${price} per night</p>
                    <p><strong>Description:</strong> {description}</p>
                    <p><strong>Room Type:</strong> {roomType}</p>
                    <p><strong>Bed Type:</strong> {bedType}</p>
                </div>
                <div className="mb-4">
                    <label className="font-semibold">Select Booking Date:</label>
                    <ReactDatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        dateFormat="yyyy/MM/dd"
                        className="w-full p-3 border rounded-lg"
                    />
                </div>
                <button
                    onClick={handleConfirmBooking}
                    className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-400 transition"
                >
                    Confirm Booking
                </button>
                <button
                    onClick={() => setShowModal(false)}
                    className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-400 transition mt-4"
                >
                    Close
                </button>
            </Modal>
        </div>
    );
}
