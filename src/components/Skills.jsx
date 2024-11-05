import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaTools, FaDatabase, FaReact, FaBook, FaUsers } from 'react-icons/fa';

const SkillCategory = ({ title, skills, icon: Icon }) => (
    <motion.div
        className="mb-8 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-xl shadow-xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
    >
        <div className="p-6">
            <div className="flex items-center mb-4">
                <Icon className="text-4xl text-indigo-600 dark:text-indigo-400 mr-3" />
                <h3 className="text-2xl font-extrabold text-gray-800 dark:text-white">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                    <motion.span
                        key={index}
                        className="bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 px-4 py-2 rounded-full text-sm font-semibold shadow-md"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {skill}
                    </motion.span>
                ))}
            </div>
        </div>
    </motion.div>
);

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
        <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-5xl font-black mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    My Skills
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {skillCategories.map((category, index) => (
                        <SkillCategory key={index} {...category} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;