import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import SignUp from "../pages/Authentication/SignUp";
import SignIn from "../pages/Authentication/SignIn";
import Home from "../pages/Home";
import Rooms from "../pages/Rooms";
import AddedRoom from "../pages/AddedRoom";
import RoomDetails from "../pages/RoomDetails";
import PrivateRoute from "./PrivateRoute";
import MyBooking from "../pages/MyBooking";
import Error from "../components/Error";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error></Error>,
        children: [
            {

                index: true,
                element: <Home></Home>,

            },
            {
                path: "/rooms",
                element: <Rooms></Rooms>,
            },
            {
                path: '/roomDetails/:id',
                element: <PrivateRoute>
                    <RoomDetails></RoomDetails>
                </PrivateRoute>,
            },
            {
                path: '/mybooking',
                element: <PrivateRoute>
                    <MyBooking></MyBooking>
                </PrivateRoute>,
            },


            {
                path: "/addedrooms",
                element: <PrivateRoute>
                    <AddedRoom></AddedRoom>
                </PrivateRoute>,
            },
           
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            }

        ]
    }
])

export default router;