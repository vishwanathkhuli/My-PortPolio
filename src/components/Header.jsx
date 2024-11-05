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

    return (
        <motion.header
            className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-10"
            variants={headerVariants}
            initial="hidden"
            animate="visible"
        >
            <nav className="w-full px-4 py-3">
                <div className="flex justify-between items-center max-w-7xl mx-auto">
                    <motion.a
                        href="#hero"
                        className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white cursor-pointer"
                        variants={itemVariants}
                        whileHover="hover"
                    >
                        Vishwanath
                    </motion.a>
                    <div className="hidden md:flex space-x-6 items-center">
                        {navItems.map((item) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-300"
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
                            {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
                        </motion.button>
                    </div>
                    <div className="md:hidden flex items-center">
                        <motion.button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 mr-2"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
                        </motion.button>
                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                        </motion.button>
                    </div>
                </div>
                {isOpen && (
                    <motion.div
                        className="mt-4 md:hidden"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                className="block py-2 text-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-300"
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