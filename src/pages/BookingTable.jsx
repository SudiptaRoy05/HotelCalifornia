import axios from "axios";
import toast from "react-hot-toast";
import { FiXCircle } from "react-icons/fi";
import moment from "moment";

export default function BookingTable({ booking, idx, refreshUi }) {
    const { _id, roomName, roomId, roomType, price, bookingDate } = booking;

    // Handle booking cancellation
    const handleCancel = async (id, roomId, status) => {
        try {
            // Cancel the booking
            await axios.delete(`http://localhost:5000/cancle-booking/${id}`);
            toast.success("Booking canceled successfully!");

            // Update the room status to "Available"
            const { data } = await axios.patch(`http://localhost:5000/add-rooms/${roomId}`, { status });
            console.log(data)
            // Refresh the UI (trigger parent component to refetch or update state)
            refreshUi();
        } catch (err) {
            toast.error(`An error occurred while canceling the booking: ${err.message}`);
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
        <tr className="even:bg-gray-100 odd:bg-white hover:bg-gray-200 transition-colors duration-300">
            <td className="px-4 py-3 border-t text-center">{idx + 1}</td>
            <td className="px-4 py-3 border-t">{roomName}</td>
            <td className="px-4 py-3 border-t">{roomType}</td>
            <td className="px-4 py-3 border-t text-green-600 font-bold">${price}</td>
            <td className="px-4 py-3 border-t">{formattedDate}</td>
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
    );
}
