import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { AuthContext } from "../Provider/AuthProvider";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "react-modal";
import toast from "react-hot-toast";  // Importing React Hot Toast
import { Helmet } from "react-helmet";
import useSecureAxios from "../hooks/useSecureAxios";

Modal.setAppElement('#root');

export default function RoomDetails() {
    const axiosSecure = useSecureAxios() 
    const { user } = useContext(AuthContext);
    const [room, setRoom] = useState({});
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState({ user: "", email: "", comment: "", rating: 0 });
    const [showModal, setShowModal] = useState(false);
    const [showReviewModal, setShowReviewModal] = useState(false);

    const [selectedDate, setSelectedDate] = useState(null);
    const { id } = useParams();

    const fetchRoomData = async () => {
        try {
            const { data } = await axiosSecure.get(`${import.meta.env.VITE_API_URL}/room-details/${id}`);
            setRoom(data);
        } catch (error) {
            console.error("Error fetching room data:", error);
            toast.error("Error fetching room details.");
        }
    };

    useEffect(() => {

        if (id) {
            fetchRoomData();
        }
    }, [id]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const { data } = await axiosSecure.get(`${import.meta.env.VITE_API_URL}/review/${id}`);
                if (data.length === 0) {
                    console.log('Faild to load data')
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

            const reviewWithRoomId = {
                ...newReview,
                roomId: id,
                timestamp: new Date().toISOString(),
            };

            await axiosSecure.post(`${import.meta.env.VITE_API_URL}/add-review/${id}`, reviewWithRoomId);

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

    const handleConfirmBooking = async (status) => {
        if (!selectedDate) {
            toast.error("Please select a booking date!");
            return;
        }

        const bookingData = {
            userName: user?.displayName || "Guest",
            email: user?.email || "Not provided",
            roomId: id,
            roomName: name,
            roomType,
            bedType,
            price,
            bookingDate: selectedDate.toISOString(),
        };

        try {
            await axiosSecure.post(`${import.meta.env.VITE_API_URL}/add-booking`, bookingData);

            toast.success(`Room booked for ${selectedDate.toLocaleDateString()}`);
            const {data} = await axiosSecure.patch(`${import.meta.env.VITE_API_URL}/add-rooms/${id}`, status);
            console.log(data)
            if (id) {

                fetchRoomData();
            }

            setShowModal(false);
            console.log(data)

        } catch (error) {
            console.error("Error booking the room:", error);
            toast.error("Something went wrong while booking the room. Please try again.");
        }
    };


    const { name, price, description, imageUrl, facilities, roomType, bedType, status } = room;

    return (
        <div className="py-8 px-4">
            <Helmet>
                <title>Room Details - Hotel California</title>
                <meta name="description" content="Create your account at Hotel California and start booking your perfect stay today." />
            </Helmet>
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
                        disabled={status === "Booked"}
                        className={`block w-full py-3 text-center font-semibold rounded-lg transition-colors mt-6 ${status === "Booked"
                            ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                            : "bg-blue-600 text-white hover:bg-blue-500"
                            }`}
                    >
                        {status === "Booked" ? "Already Booked" : "Book Now"}
                    </button>


                    <div className="mt-4">
                        <h3 className="text-gray-800 font-semibold mb-2">Reviews:</h3>
                        {reviews.length > 0 ? (
                            reviews.map((rev, idx) => (
                                <div key={idx} className="mb-4 border-b pb-4">
                                    <p className="font-semibold">{rev.user} <span className="text-gray-500 text-sm"> Reviewed on: {new Date(rev.timestamp).toLocaleString()}</span></p>

                                    <p className="text-gray-600">{rev.comment}</p>
                                    <ReactStars value={rev.rating} count={5} size={20} edit={false} activeColor="#ffd700" />
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 italic">No reviews available for this room.</p>
                        )}
                    </div>

                    <button
                        onClick={() => setShowReviewModal(true)}
                        disabled={status === "Available"}
                        className={`py-2 px-6 rounded-lg transition ${status === "Available"
                            ? "bg-gray-400 text-white cursor-not-allowed"
                            : "bg-blue-500 text-white hover:bg-blue-400"
                            }`}
                    >
                        Give Review
                    </button>


                    <Modal
                        isOpen={showReviewModal}
                        onRequestClose={() => setShowReviewModal(false)}
                        contentLabel="Add Review Modal"
                        className="w-full max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg relative"
                        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                    >
                        <h3 className="text-gray-800 font-semibold mb-4">Add Your Review:</h3>
                        {/* Username Field (Read-only) */}
                        <div className="mb-4">
                            <label className="font-semibold mb-2 block">Username:</label>
                            <input
                                type="text"
                                value={user?.displayName}
                                readOnly
                                className="w-full p-3 border rounded-lg bg-gray-100 text-gray-700"
                            />
                        </div>
                        {/* Comment Field */}
                        <textarea
                            placeholder="Your Comment"
                            value={newReview.comment}
                            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                            className="w-full mb-4 p-3 border rounded-lg"
                        ></textarea>
                        {/* Rating Field */}
                        <div className="mb-4">
                            <label className="font-semibold mb-2 block">Your Rating:</label>
                            <ReactStars
                                value={newReview.rating}
                                count={5}
                                size={20}
                                edit={true}
                                activeColor="#ffd700"
                                onChange={(newRating) => setNewReview({ ...newReview, rating: newRating })}
                            />
                        </div>
                        <div className="flex justify-end gap-4">
                            <button
                                onClick={() => setShowReviewModal(false)}
                                className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-400 transition"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleAddReview}
                                className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-400 transition"
                            >
                                Submit Review
                            </button>
                        </div>
                    </Modal>


                    {/* <div className="mt-8">
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
                    </div> */}
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
                    onClick={() => handleConfirmBooking({ status: "Booked" })}
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
