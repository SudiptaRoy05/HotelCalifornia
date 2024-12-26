import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import SignUp from "../pages/Authentication/SignUp";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <h2>404 ERROR</h2>,
        children: [
            {
                path:'/signin',
                element:<h1>signin</h1>
            },
            {
                path:"/signup",
                element:<SignUp></SignUp>
            }

        ]
    }
])

export default router;