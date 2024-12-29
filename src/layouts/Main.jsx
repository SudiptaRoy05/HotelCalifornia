import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Main() {
    return (
        <div className="flex flex-col min-h-screen">
            <header>
                <Navbar />
            </header>
            <main className="flex-grow">
                <Outlet />
            </main>
            <footer className="bg-gray-800 text-white py-4 bottom-0 w-full">
                <Footer />
            </footer>
        </div>
    );
}
