import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import BookingTable from "./BookingTable";

export default function MyBooking() {
    const [bookings, setBookings] = useState([]);
    const { user } = useContext(AuthContext);

    const fetchMyBooking = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/my-booking/${user?.email}`);
            setBookings(data);
        } catch (error) {
            console.error("Error fetching bookings:", error);
        }
    };

    const refreshUi = () => {
        fetchMyBooking()
    }

    useEffect(() => {
        if (user?.email) {
            fetchMyBooking();
        }
    }, [user?.email]);

    return (
        <div className="w-11/12 mx-auto my-8">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">My Bookings</h1>

            <div className="overflow-x-auto shadow-lg rounded-lg">
                <table className="table-auto w-full border border-gray-300">
                    {/* Table Head */}
                    <thead className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                        <tr>
                            <th className="px-4 py-2 text-left">#</th>
                            <th className="px-4 py-2 text-left">Room Name</th>
                            <th className="px-4 py-2 text-left">Room Type</th>
                            <th className="px-4 py-2 text-left">Price</th>
                            <th className="px-4 py-2 text-left">Booking Date</th>
                            <th className="px-4 py-2 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Dynamic Rows */}
                        {bookings.length > 0 ? (
                            bookings.map((booking, idx) => (
                                <BookingTable key={booking._id} idx={idx} booking={booking} refreshUi={refreshUi}></BookingTable>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center py-4 text-gray-600">
                                    No bookings found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
