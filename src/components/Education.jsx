import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaUniversity } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';

const EducationItem = ({ item, variants }) => (
    <motion.div
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 space-y-3 sm:space-y-4"
        variants={variants}
    >
        <div className="flex items-center space-x-3 sm:space-x-4">
            <item.icon className="text-3xl sm:text-4xl text-indigo-500 dark:text-indigo-400" />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">{item.institution}</h3>
        </div>
        <div className="pl-10 sm:pl-14 space-y-1 sm:space-y-2">
            <p className="text-sm sm:text-base text-indigo-600 dark:text-indigo-300">{item.degree}</p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{item.year}</p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{item.grade}</p>
        </div>
    </motion.div>
);

const EducationTable = ({ educationData }) => {
    const isLargeScreen = useMediaQuery({ minWidth: 1024 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    if (isLargeScreen) {
        return (
            <motion.div
                className="overflow-x-auto rounded-xl shadow-2xl"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <table className="w-full bg-white dark:bg-gray-800 border-collapse">
                    <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                        <tr>
                            <th className="p-4 lg:p-6 text-left text-base lg:text-lg font-semibold">Institution</th>
                            <th className="p-4 lg:p-6 text-left text-base lg:text-lg font-semibold">Degree</th>
                            <th className="p-4 lg:p-6 text-left text-base lg:text-lg font-semibold">Year</th>
                            <th className="p-4 lg:p-6 text-left text-base lg:text-lg font-semibold">Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {educationData.map((item, index) => (
                            <motion.tr
                                key={index}
                                className="border-b border-gray-200 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-indigo-900 transition-colors duration-300"
                                variants={itemVariants}
                            >
                                <td className="p-4 lg:p-6 flex items-center">
                                    <item.icon className="text-2xl lg:text-3xl text-indigo-500 dark:text-indigo-400 mr-3 lg:mr-4" />
                                    <span className="font-medium text-sm lg:text-base">{item.institution}</span>
                                </td>
                                <td className="p-4 lg:p-6 text-sm lg:text-base">{item.degree}</td>
                                <td className="p-4 lg:p-6 text-sm lg:text-base">{item.year}</td>
                                <td className="p-4 lg:p-6 text-sm lg:text-base">{item.grade}</td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </motion.div>
        );
    } else {
        return (
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="space-y-4 sm:space-y-6"
            >
                {educationData.map((item, index) => (
                    <EducationItem key={index} item={item} variants={itemVariants} />
                ))}
            </motion.div>
        );
    }
};

const Education = () => {
    const educationData = [
        {
            institution: 'Angadi Institute of Technology and Management (VTU), Belagavi - Karnataka',
            degree: 'B.Tech in Computer Science',
            year: '2019 – 2023',
            grade: 'CGPA: 8.65',
            icon: FaUniversity
        },
        {
            institution: 'KLS PU Science College, Haliyal - Karnataka',
            degree: 'XII Standard',
            year: '2017 – 2019',
            grade: 'Percentage: 77',
            icon: FaSchool
        },
        {
            institution: 'Government High School Yadoga, Haliyal - Karnataka',
            degree: 'X Standard',
            year: '2015 – 2017',
            grade: 'Percentage: 92.16',
            icon: FaGraduationCap
        },
    ];

    return (
        <section id="education" className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-300 dark:to-purple-300"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Educational Journey
                </motion.h2>
                <div className="max-w-6xl mx-auto">
                    <EducationTable educationData={educationData} />
                </div>
            </div>
        </section>
    );
};

export default Education;