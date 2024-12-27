import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import SignUp from "../pages/Authentication/SignUp";
import SignIn from "../pages/Authentication/SignIn";
import Home from "../pages/Home";
import Rooms from "../pages/Rooms";
import AddedRoom from "../pages/AddedRoom";


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
                path:"/rooms",
                element:<Rooms></Rooms>
            },
            {
                path:"/addedrooms",
                element:<AddedRoom></AddedRoom>
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