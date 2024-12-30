import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { FiXCircle } from "react-icons/fi";
import moment from "moment";
import { Helmet } from "react-helmet";

export default function BookingTable({ booking, idx, refreshUi }) {
    const { _id, roomName, roomId, roomType, price, bookingDate } = booking;

    const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal visibility
    const [newDate, setNewDate] = useState(""); // State for new booking date

    // Handle booking cancellation
    const handleCancel = async (id, roomId, status) => {
        try {
            await axios.delete(`http://localhost:5000/cancle-booking/${id}`);
            toast.success("Booking canceled successfully!");

            await axios.patch(`http://localhost:5000/add-rooms/${roomId}`, { status });
            refreshUi(); // Refresh the UI
        } catch (err) {
            toast.error(`An error occurred while canceling the booking: ${err.message}`);
        }
    };

    // Handle date update
    const handleUpdateDate = async () => {
        if (!newDate) {
            toast.error("Please select a new date.");
            return;
        }

        try {
            await axios.patch(`http://localhost:5000/update-date/${_id}`, { bookingDate: newDate });
            toast.success("Booking date updated successfully!");
            refreshUi(); // Refresh the UI after update
            setIsModalOpen(false); // Close the modal after update
        } catch (err) {
            toast.error(`An error occurred while updating the date: ${err.message}`);
        }
    };

    // Show confirmation toast before canceling
    const modernCancel = (_id, roomId, status) => {
        toast((t) => (
            <div className="flex gap-3 items-center">
                <div>
                    <p>
                        Are you <b>Sure</b>?
                    </p>
                </div>
                <div>
                    <button
                        className="bg-red-500 text-white px-3 py-1 rounded-md"
                        onClick={() => {
                            toast.dismiss(t.id);
                            handleCancel(_id, roomId, status); // Proceed with cancellation
                        }}
                    >
                        Yes
                    </button>
                </div>
                <div>
                    <button
                        className="bg-green-500 text-white px-3 py-1 rounded-md"
                        onClick={() => toast.dismiss(t.id)} // Close toast without canceling
                    >
                        Cancel
                    </button>
                </div>
            </div>
        ));
    };

    // Check if the booking can be canceled based on the cancellation deadline (24 hours before booking date)
    const canCancelBooking = () => {
        const cancellationDeadline = moment(bookingDate).subtract(1, "days");
        const today = moment();

        return today.isBefore(cancellationDeadline); // Can cancel if today is before the cancellation deadline
    };

    // Format the booking date for display
    const formattedDate = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(new Date(bookingDate));

    return (
        <>
            <tr className="even:bg-gray-100 odd:bg-white hover:bg-gray-200 transition-colors duration-300">
                <Helmet>
                    <title>Booking - Hotel California</title>
                    <meta
                        name="description"
                        content="Create your account at Hotel California and start booking your perfect stay today."
                    />
                </Helmet>
                <td className="px-4 py-3 border-t text-center">{idx + 1}</td>
                <td className="px-4 py-3 border-t">{roomName}</td>
                <td className="px-4 py-3 border-t">{roomType}</td>
                <td className="px-4 py-3 border-t text-green-600 font-bold">${price}</td>
                <td className="px-4 py-3 border-t">{formattedDate}</td>
                <td className="px-4 py-3 border-t">
                    <button
                        className="btn btn-success text-white"
                        onClick={() => setIsModalOpen(true)} // Open the modal on button click
                    >
                        Update Date
                    </button>
                </td>
                <td className="px-4 py-3 border-t text-center">
                    {canCancelBooking() ? (
                        <button
                            onClick={() => modernCancel(_id, roomId, "Available")}
                            className="flex items-center justify-center gap-1 text-red-600 hover:text-red-800 transition duration-300"
                            title="Cancel Booking"
                        >
                            <FiXCircle className="text-lg" />
                            <span className="hidden md:inline">Cancel</span>
                        </button>
                    ) : (
                        <span className="text-gray-400 italic">Cancellation not allowed</span>
                    )}
                </td>
            </tr>

            {/* Modal for updating booking date */}
            {isModalOpen && (
                <div className="flex items-center justify-center  bg-black bg-opacity-50">
                    <div className="modal modal-open w-full md:w-96">
                        <div className="modal-box">
                            <h3 className="text-xl font-semibold mb-4">Update Booking Date</h3>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">Current Date:</label>
                                <p className="text-lg font-semibold">{formattedDate}</p>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">New Date:</label>
                                <input
                                    type="date"
                                    className="input input-bordered w-full"
                                    onChange={(e) => setNewDate(e.target.value)} // Update the new date
                                />
                            </div>
                            <div className="modal-action">
                                <button
                                    className="btn btn-primary"
                                    onClick={handleUpdateDate} // Confirm the date update
                                >
                                    Confirm
                                </button>
                                <button
                                    className="btn btn-secondary"
                                    onClick={() => setIsModalOpen(false)} // Close the modal
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}