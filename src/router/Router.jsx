import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import SignUp from "../pages/Authentication/SignUp";
import SignIn from "../pages/Authentication/SignIn";
import Home from "../pages/Home";
import Rooms from "../pages/Rooms";
import AddedRoom from "../pages/AddedRoom";
import MyAddedRooms from "../pages/MyAddedRooms";
import RoomDetails from "../pages/RoomDetails";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <h2>404 ERROR</h2>,
        children: [
            {

                index: true,
                element: <Home></Home>,

            },
            {
                path: "/rooms",
                element: <PrivateRoute>
                    <Rooms></Rooms>
                </PrivateRoute>,
            },
            {
                path: '/roomDetails/:id',
                element: <PrivateRoute>
                    <RoomDetails></RoomDetails>
                </PrivateRoute>,
            },
            {
                path: "/addedrooms",
                element: <PrivateRoute>
                    <AddedRoom></AddedRoom>
                </PrivateRoute>,
            },
            {
                path: "/myaddedroom",
                element: <PrivateRoute>
                    <MyAddedRooms></MyAddedRooms>
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