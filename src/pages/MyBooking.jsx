import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import BookingTable from "./BookingTable";
import useSecureAxios from "../hooks/useSecureAxios";

export default function MyBooking() {
    const [bookings, setBookings] = useState([]);
    const axiosSecure = useSecureAxios();

    const { user } = useContext(AuthContext);

    const fetchMyBooking = async () => {
        try {
            const { data } = await axiosSecure.get(`${import.meta.env.VITE_API_URL}/my-booking/${user?.email}`);
            setBookings(data);
        } catch (error) {
            console.error("Error fetching bookings:", error);
        }
    };

    useEffect(() => {
        if (user?.email) {
            fetchMyBooking();
        }
    }, [user?.email]);

    const refreshUi = () => {
        fetchMyBooking();
    };

    return (
        <div className="max-w-7xl mx-auto px-6 py-8">
            <h1 className="text-3xl font-semibold text-gray-900 mb-6">My Bookings</h1>
            <div className="overflow-x-auto bg-white shadow-lg rounded-lg border border-gray-200">
                <table className="table-auto w-full border-collapse">
                    {/* Table Head */}
                    <thead className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                        <tr>
                            <th className="px-6 py-3 text-left">#</th>
                            <th className="px-6 py-3 text-left">Room Name</th>
                            <th className="px-6 py-3 text-left">Room Type</th>
                            <th className="px-6 py-3 text-left">Price</th>
                            <th className="px-6 py-3 text-left">Booking Date</th>
                            <th className="px-6 py-3 text-left">Update Date</th>
                            <th className="px-6 py-3 text-left">Action</th>
                        </tr>
                    </thead>
                    {
                        bookings?.length > 0 ? (
                            <tbody>
                                {/* Dynamic Rows */}
                                {bookings.map((booking, idx) => (
                                    <BookingTable
                                        key={booking._id}
                                        idx={idx}
                                        booking={booking}
                                        refreshUi={refreshUi}
                                    />
                                ))}
                            </tbody>
                        ) : (
                            <tbody>
                                <tr>
                                    <td colSpan="7" className="text-center py-6 text-gray-500">No bookings available</td>
                                </tr>
                            </tbody>
                        )
                    }
                </table>
            </div>
        </div>
    );
}
