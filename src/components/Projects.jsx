import React, { useState, useEffect } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ProjectCard = ({ title, description, tech, github, demo, image }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const { darkMode } = useTheme();

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    return (
        <motion.div
            className={`bg-gradient-to-r ${darkMode ? 'from-blue-600 to-purple-700' : 'from-blue-400 to-purple-500'} rounded-xl shadow-lg overflow-hidden relative`}
            style={{ aspectRatio: '1.586' }}
            whileHover={{ scale: isMobile ? 1 : 1.05 }}
            whileTap={{ scale: isMobile ? 1 : 0.95 }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onHoverStart={() => !isMobile && setIsHovered(true)}
            onHoverEnd={() => !isMobile && setIsHovered(false)}
        >
            <motion.img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            />
            <AnimatePresence>
                {(isHovered || isMobile) && (
                    <motion.div
                        className={`absolute inset-0 ${darkMode ? 'bg-black bg-opacity-85' : 'bg-white bg-opacity-90'} p-4 sm:p-6 flex flex-col justify-between`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div>
                            <h3 className={`text-lg sm:text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{title}</h3>
                            <p className={`${darkMode ? 'text-gray-200' : 'text-gray-600'} mb-2 sm:mb-4 text-xs sm:text-sm`}>{description}</p>
                            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-500'} mb-2 sm:mb-4 text-xs sm:text-sm`}>
                                <strong>Technologies:</strong> {tech}
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2 sm:gap-4">
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center ${darkMode ? 'text-white hover:text-gray-200 bg-blue-600' : 'text-white hover:text-gray-100 bg-blue-500'} px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm`}
                            >
                                <FiGithub className="mr-1 sm:mr-2" /> GitHub
                            </a>
                            {demo && (
                                <a
                                    href={demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center ${darkMode ? 'text-white hover:text-gray-200 bg-green-600' : 'text-white hover:text-gray-100 bg-green-500'} px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm`}
                                >
                                    <FiExternalLink className="mr-1 sm:mr-2" /> Live Demo
                                </a>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const Projects = () => {
    const { darkMode } = useTheme();
    const projects = [

        {
            title: 'Quiz Master',
            description: 'An interactive quiz application designed to test users knowledge across various topics. Features include multiple-choice questions, real-time scoring, and instant feedback, ensuring an engaging and responsive user experience.',
            tech: 'Java, Spring Boot, React, Javascript, Mysql, Docker',
            github: 'https://github.com/vishwanathkhuli/my-quiz-backend.git',
            demo: 'https://quiz-demo-livid.vercel.app/',
            image: 'https://github.com/vishwanathkhuli/my-quiz-backend/blob/main/Screenshot%20(108).png?raw=true'
        },
        {
            title: 'E-Commerce-Landing-Pages',
            description: 'Designed and developed the front-end of a responsive e-commerce website, focusing on user experience and interface design.',
            tech: 'JavaScript, CSS, HTML',
            github: 'https://github.com/vishwanathkhuli/E-Commerce-Landing',
            demo: 'https://vishwanathkhuli.github.io/E-Commerce-Landing/',
            image: 'https://github.com/vishwanathkhuli/E-Commerce-Landing/raw/main/Imges/Index-Page.png'
        },
        {
            title: 'IMDB Mini Clone',
            description: 'Designed a clone of IMDB website featuring ratings and reviews of movies and series.',
            tech: 'HTML, CSS, JavaScript, Bootstrap',
            github: 'https://github.com/vishwanathkhuli/mini-imdb-clone-app',
            demo: 'https://vishwanathkhuli.github.io/mini-imdb-clone-app/',
            image: 'https://github.com/vishwanathkhuli/mini-imdb-clone-app/raw/main/Images/mini-imdb-screenshot1.png'
        },
        {
            title: 'Stop Watch',
            description: 'Developed a functional stopwatch application with start, stop, and reset features.',
            tech: 'HTML, CSS, JavaScript',
            github: 'https://github.com/vishwanathkhuli/Stop-Watch',
            demo: 'https://vishwanathkhuli.github.io/Stop-Watch/',
            image: 'https://github.com/vishwanathkhuli/Stop-Watch/raw/main/Images/Stopwatch.png'
        },
        {
            title: 'Task Management',
            description: 'Designed and implemented a user interface for a task management application, ensuring a responsive and intuitive experience.',
            tech: 'HTML, CSS, JavaScript',
            github: 'https://github.com/vishwanathkhuli/TeskManagementApplication',
            demo: 'https://vishwanathkhuli.github.io/TeskManagementApplication/',
            image: 'https://github.com/vishwanathkhuli/TeskManagementApplication/blob/main/Screenshot%20(99).png?raw=true'
        },
    ];

    return (
        <motion.section
            id="projects"
            className={`py-12 sm:py-20 ${darkMode ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gradient-to-b from-gray-100 to-gray-200'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container mx-auto px-4">
                <motion.h2
                    className={`text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Projects
                </motion.h2>
                <motion.div
                    className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 * index, duration: 0.5 }}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Projects;