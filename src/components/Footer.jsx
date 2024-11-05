import React from 'react';
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-4 sm:py-6 md:py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div className="mb-4 sm:mb-0 text-center sm:text-left">
                        <p className="text-sm sm:text-base">&copy; 2024 Vishwanath Khuli. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-4 sm:space-x-6">
                        <a
                            href="https://www.linkedin.com/in/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition-colors duration-300"
                            aria-label="LinkedIn"
                        >
                            <FiLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                        </a>
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-400 transition-colors duration-300"
                            aria-label="GitHub"
                        >
                            <FiGithub className="w-5 h-5 sm:w-6 sm:h-6" />
                        </a>
                        <a
                            href="mailto:vishwanathkhuli347@gmail.com"
                            className="hover:text-red-400 transition-colors duration-300"
                            aria-label="Email"
                        >
                            <FiMail className="w-5 h-5 sm:w-6 sm:h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;