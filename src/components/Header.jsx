import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { darkMode, toggleDarkMode } = useTheme();

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];

    const headerVariants = {
        hidden: { y: -50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 20
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        },
        hover: {
            scale: 1.05,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.header
            className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-10"
            variants={headerVariants}
            initial="hidden"
            animate="visible"
        >
            <nav className="w-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
                <div className="flex justify-between items-center max-w-7xl mx-auto">
                    <motion.button
                        className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-white cursor-pointer"
                        variants={itemVariants}
                        whileHover="hover"
                        onClick={() => scrollToSection('hero')}
                    >
                        Vishwanath
                    </motion.button>
                    <div className="hidden lg:flex space-x-4 xl:space-x-6 items-center">
                        {navItems.map((item) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-300"
                                variants={itemVariants}
                                whileHover="hover"
                            >
                                {item.name}
                            </motion.a>
                        ))}
                        <motion.button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                        </motion.button>
                    </div>
                    <div className="lg:hidden flex items-center">
                        <motion.button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 mr-2"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                        </motion.button>
                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </motion.button>
                    </div>
                </div>
                {isOpen && (
                    <motion.div
                        className="mt-4 lg:hidden"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                className="block py-2 text-base sm:text-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-300"
                                onClick={() => setIsOpen(false)}
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                custom={index}
                                whileHover="hover"
                            >
                                {item.name}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </nav>
        </motion.header>
    );
};

export default Header;