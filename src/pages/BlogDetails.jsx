import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider'; // Adjust the import path if necessary

export default function BlogDetails() {
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
    const { user, loading: authLoading } = useContext(AuthContext); // Get authentication state

    useEffect(() => {
        if (!authLoading && !user) {
            navigate('/login'); // Redirect if user is not logged in
        }
    }, [user, authLoading, navigate]);

    const getDataById = async (id) => {
        try {
            const { data } = await axios.get(`http://localhost:5000/blog/details/${id}`);
            setDetails(data);
        } catch (error) {
            console.error('Error fetching blog details:', error);
            setError('Failed to load blog details. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user) {
            getDataById(id);
        }
    }, [id, user]);

    if (loading) {
        return <div className="text-center py-20">Loading...</div>;
    }

    if (error) {
        return <div className="text-center py-20 text-red-500">{error}</div>;
    }

    const { title, image, description } = details;

    return (
        <div className="max-w-4xl mx-auto p-6 mt-20">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">{title}</h1>
            <img
                src={image}
                alt={title}
                className="w-full h-auto max-h-96 object-cover mb-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            />
            <div className="prose prose-lg max-w-none mx-auto">
                <p>{description}</p>
            </div>
        </div>
    );
}
