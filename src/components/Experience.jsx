import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCertificate, FaCode } from 'react-icons/fa';

const Experience = () => {
    const experienceData = [
        {
            title: "Full Stack Developer",
            company: "Tequed Labs",
            companyLink: "https://www.tequedlabs.com",
            location: "Bangalore, Karnataka",
            period: "September 2022 – September 2022",
            certificateLink: "https://drive.google.com/file/d/1GxsAtpqoXLo5U9xYp2uPkGDW4BbRl70C/view?usp=drive_link",
            sourceCodeLink: "https://github.com/vishwanathkhuli/covid-tms-19",
            description: "Led the development of innovative web solutions, focusing on creating responsive and user-friendly interfaces while optimizing backend performance."
        }
    ];

    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return (
        <section id="experience" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center text-gray-900 dark:text-white"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Professional Experience
                </motion.h2>
                <motion.div
                    ref={ref}
                    className="max-w-4xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                >
                    {experienceData.map((job, index) => (
                        <motion.div
                            key={index}
                            className="mb-8 sm:mb-12 bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                            variants={itemVariants}
                        >
                            <div className="p-4 sm:p-6 md:p-8">
                                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-white">
                                    {job.title}
                                </h3>
                                <div className="flex flex-wrap items-center mb-3 sm:mb-4 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                                    <div className="flex items-center mr-4 sm:mr-6 mb-2">
                                        <FaBriefcase className="mr-2 text-blue-500" />
                                        <a
                                            href={job.companyLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-blue-500 transition-colors duration-300"
                                        >
                                            {job.company}
                                        </a>
                                    </div>
                                    <div className="flex items-center mr-4 sm:mr-6 mb-2">
                                        <FaCalendarAlt className="mr-2 text-green-500" />
                                        <span>{job.period}</span>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <FaMapMarkerAlt className="mr-2 text-red-500" />
                                        <span>{job.location}</span>
                                    </div>
                                </div>
                                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                                    {job.description}
                                </p>
                                <div className="flex flex-wrap justify-start gap-3 sm:gap-4">
                                    <a
                                        href={job.certificateLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center bg-blue-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold hover:bg-blue-600 transition-colors duration-300 shadow-md"
                                    >
                                        <FaCertificate className="mr-2" />
                                        View Certificate
                                    </a>
                                    <a
                                        href={job.sourceCodeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center bg-green-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold hover:bg-green-600 transition-colors duration-300 shadow-md"
                                    >
                                        <FaCode className="mr-2" />
                                        Source Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;