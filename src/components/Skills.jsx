import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaTools, FaDatabase, FaReact, FaBook, FaUsers } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';

const SkillCategory = ({ title, skills, icon: Icon }) => {
    const isMobile = useMediaQuery({ maxWidth: 640 });
    const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 1024 });

    return (
        <motion.div
            className="mb-4 sm:mb-6 md:mb-8 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="p-4 sm:p-5 md:p-6">
                <div className="flex items-center mb-3 sm:mb-4">
                    <Icon className="text-2xl sm:text-3xl md:text-4xl text-indigo-600 dark:text-indigo-400 mr-2 sm:mr-3" />
                    <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-gray-800 dark:text-white">{title}</h3>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                    {skills.map((skill, index) => (
                        <motion.span
                            key={index}
                            className="bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-md"
                            whileHover={{ scale: isMobile ? 1 : 1.1, rotate: isMobile ? 0 : 5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            skills: ['Java', 'HTML', 'CSS', 'JavaScript'],
            icon: FaCode,
        },
        {
            title: 'Developer Tools',
            skills: ['VS Code', 'Sublime Text 3', 'Eclipse'],
            icon: FaTools,
        },
        {
            title: 'Databases',
            skills: ['SQL'],
            icon: FaDatabase,
        },
        {
            title: 'Frameworks',
            skills: ['React', 'Bootstrap', 'Spring', 'Spring Boot'],
            icon: FaReact,
        },
        {
            title: 'Additional Skills',
            skills: ['DSA', 'OOPS', 'DBMS'],
            icon: FaBook,
        },
        {
            title: 'Soft Skills',
            skills: ['Communication', 'Team Work', 'Problem Solving', 'Quick Learning'],
            icon: FaUsers,
        },
    ];

    return (
        <section id="skills" className="py-10 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 sm:mb-12 md:mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    My Skills
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                    {skillCategories.map((category, index) => (
                        <SkillCategory key={index} {...category} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;