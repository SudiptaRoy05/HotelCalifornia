import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';

export default function Blog() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/blogs`);
                setBlogs(data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };
        fetchBlogs();
    }, []);

    return (
        <div className="container mx-auto px-4 py-10 mt-20 w-11/12 lg:w-10/12">
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-10">Latest Blogs</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {blogs.length > 0 ? (
                    blogs.map(blog => <BlogCard key={blog._id} blog={blog} />)
                ) : (
                    <p className="text-center text-gray-500 col-span-full">No blogs available.</p>
                )}
            </div>
        </div>
    );
}