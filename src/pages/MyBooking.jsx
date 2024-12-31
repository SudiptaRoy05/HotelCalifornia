
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import BookingTable from "./BookingTable";
import useSecureAxios from "../hooks/useSecureAxios";

export default function MyBooking() {
    const [bookings, setBookings] = useState([]);
    const axiosSecure = useSecureAxios()

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
        <div>
            <h1 className="text-2xl font-bold mb-6">My Bookings</h1>
            <div className="overflow-x-auto shadow-lg rounded-lg">
                <table className="table-auto w-full border-collapse border border-gray-200">
                    {/* Table Head */}
                    <thead className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                        <tr>
                            <th className="px-4 py-2 text-left">#</th>
                            <th className="px-4 py-2 text-left">Room Name</th>
                            <th className="px-4 py-2 text-left">Room Type</th>
                            <th className="px-4 py-2 text-left">Price</th>
                            <th className="px-4 py-2 text-left">Booking Date</th>
                            <th className="px-4 py-2 text-left">Update Date</th>
                            <th className="px-4 py-2 text-left">Action</th>
                        </tr>
                    </thead>
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
                </table>
            </div>
        </div>
    );
}
