import React from 'react';
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p>&copy; 2024 Vishwanath Khuli. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-4">
                        <a
                            href="https://www.linkedin.com/in/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition-colors duration-300"
                        >
                            <FiLinkedin size={24} />
                        </a>
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-400 transition-colors duration-300"
                        >
                            <FiGithub size={24} />
                        </a>
                        <a
                            href="mailto:vishwanathkhuli347@gmail.com"
                            className="hover:text-red-400 transition-colors duration-300"
                        >
                            <FiMail size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;