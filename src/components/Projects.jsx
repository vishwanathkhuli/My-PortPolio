import React, { useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCard = ({ title, description, tech, github, demo, image }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl shadow-lg overflow-hidden relative"
            style={{ aspectRatio: '1.586' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
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
                {isHovered && (
                    <motion.div
                        className="absolute inset-0 bg-black bg-opacity-75 p-6 flex flex-col justify-between"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
                            <p className="text-gray-200 mb-4 text-sm">{description}</p>
                            <p className="text-gray-300 mb-4 text-sm">
                                <strong>Technologies:</strong> {tech}
                            </p>
                        </div>
                        <div className="flex space-x-4">
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-white hover:text-gray-200 bg-blue-600 px-3 py-1 rounded-full text-sm"
                            >
                                <FiGithub className="mr-2" /> GitHub
                            </a>
                            {demo && (
                                <a
                                    href={demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-white hover:text-gray-200 bg-green-600 px-3 py-1 rounded-full text-sm"
                                >
                                    <FiExternalLink className="mr-2" /> Live Demo
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
    const projects = [
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
            className="py-20 bg-gradient-to-b from-gray-900 to-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-3xl font-bold mb-8 text-center text-white"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Projects
                </motion.h2>
                <motion.div
                    className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
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