import axios from "axios"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
})


export default function useSecureAxios() {
    const { logout } = useAuth
    const navigate = useNavigate();
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res
        }, async error => {
            console.log(error.response)
            if (error.res.status === 401 || error.res.status === 403) {
                // logout 
                logout();
                navigate('/login');

            }
        })
    }, [logout, navigate])
    return axiosSecure;
}


