import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-blue-600 text-white py-8">
            <div className="max-w-screen-xl mx-auto md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Company Info */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-3xl font-semibold text-white">Hotel California</h3>
                        <p className="text-sm text-gray-200">Making your life easier with technology.</p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                        <ul className="text-center md:text-left">
                            <li><a href="#about" className="text-gray-200 hover:text-white transition duration-300">About Us</a></li>
                            <li><a href="#services" className="text-gray-200 hover:text-white transition duration-300">Services</a></li>
                            <li><a href="#contact" className="text-gray-200 hover:text-white transition duration-300">Contact</a></li>
                        </ul>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex gap-6 justify-center md:justify-start">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition duration-300">
                            <FaFacebook className="text-2xl" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition duration-300">
                            <FaTwitter className="text-2xl" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition duration-300">
                            <FaInstagram className="text-2xl" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition duration-300">
                            <FaLinkedin className="text-2xl" />
                        </a>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-8 text-center text-sm text-gray-200">
                    <p>&copy; {new Date().getFullYear()} Hotel California. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
