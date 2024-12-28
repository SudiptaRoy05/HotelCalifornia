import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom"
import LoadingSpinner from "../components/LoadingSpinner"

export default function PrivateRoute({ children }) {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    if (user) {
        return children
    }
    return <Navigate to='/signin' state={location.pathname}></Navigate>

}


