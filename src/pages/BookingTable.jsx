import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { FiXCircle } from "react-icons/fi";

export default function BookingTable({ booking, idx, refreshUi }) {

    const [books, setBooks] = useState(booking)

    const { _id, roomName, roomType, price, bookingDate } = books;

    const handleCancel = async (id, status) => {
        try {
            await axios.delete(`http://localhost:5000/cancle-booking/${id}`);
            const response = await axios.patch(`http://localhost:5000/add-rooms/${id}`, status)
            console.log(response.data)
            toast.success("Booking canceled successfully!");
            refreshUi()

        } catch (err) {
            toast.error(`An error occurred while canceling the booking.${err}`);
        }

    };

    const modernCancle = (id, status) => {
        toast(t => (
            <div className='flex gap-3 items-center'>
                <div>
                    <p>
                        Are you <b>Sure</b>
                    </p>
                </div>
                <div>
                    <button className=' bg-red-500 text-white px-3 py-1 rounded-md' onClick={() => {
                        toast.dismiss(t.id)
                        handleCancel(id, status)
                    }}>Yes</button>
                </div>
                <div>
                    <button className='bg-green-500 text-white px-3 py-1 rounded-md' onClick={() => toast.dismiss(t.id)}>Cancle</button>
                </div>
            </div>
        ))
    }


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
                <button
                    onClick={() => modernCancle(_id, { status: "Available" })}
                    className="flex items-center justify-center gap-1 text-red-600 hover:text-red-800 transition duration-300"
                    title="Cancel Booking"
                >
                    <FiXCircle className="text-lg" />
                    <span className="hidden md:inline">Cancel</span>
                </button>
            </td>
        </tr>
    );
}
