import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillIcon = ({ icon: Icon, label, index }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                x: 0,
                y: 0,
                rotate: 0,
                transition: {
                    type: "spring",
                    damping: 12,
                    stiffness: 100,
                    delay: index * 0.1
                }
            });
        }
    }, [controls, inView, index]);

    return (
        <motion.div
            ref={ref}
            className="flex flex-col items-center"
            initial={{
                opacity: 0,
                x: (index % 3 - 1) * 100,
                y: Math.floor(index / 3) * 100 - 100,
                rotate: Math.random() * 360
            }}
            animate={controls}
            whileHover={{
                scale: 1.1,
                transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 10
                }
            }}
        >
            <Icon className="w-8 h-8 mb-2 text-blue-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400">{label}</span>
        </motion.div>
    );
};

const About = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    About Me
                </motion.h2>
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={containerVariants}
                    className="flex flex-col md:flex-row items-center justify-between"
                >
                    <motion.div variants={itemVariants} className="md:w-1/2 mb-8 md:mb-0">
                        <motion.p
                            className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6"
                            initial={{ opacity: 0, x: -50 }}
                            animate={controls}
                            variants={{
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        type: "spring",
                                        damping: 12,
                                        stiffness: 100,
                                    }
                                }
                            }}
                        >
                            As a <span className="font-semibold text-blue-600 dark:text-blue-400">passionate</span> full stack web developer, I thrive on crafting <span className="font-semibold text-green-600 dark:text-green-400">innovative</span> digital solutions that seamlessly blend form and function. My journey in tech is fueled by an <span className="font-semibold text-purple-600 dark:text-purple-400">insatiable</span> curiosity and a commitment to staying at the forefront of emerging technologies.
                        </motion.p>
                        <motion.p
                            className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
                            initial={{ opacity: 0, x: -50 }}
                            animate={controls}
                            variants={{
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        type: "spring",
                                        damping: 12,
                                        stiffness: 100,
                                        delay: 0.2
                                    }
                                }
                            }}
                        >
                            With a <span className="font-semibold text-red-600 dark:text-red-400">keen</span> eye for detail and a <span className="font-semibold text-yellow-600 dark:text-yellow-400">user-centric</span> approach, I transform complex ideas into <span className="font-semibold text-indigo-600 dark:text-indigo-400">intuitive</span>, scalable applications that make a real-world impact.
                        </motion.p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="md:w-1/2 flex justify-center">
                        <div className="relative">
                            <img
                                src="https://avatars.githubusercontent.com/u/152583197?v=4"
                                alt="Vishwanath Khuli"
                                className="rounded-full w-64 h-64 object-cover border-4 border-blue-500 shadow-lg transform hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute -top-4 -right-4 bg-blue-500 text-white rounded-full p-3 animate-pulse">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
                <motion.div
                    variants={containerVariants}
                    className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8"
                >
                    <SkillIcon
                        icon={() => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>}
                        label="Full Stack"
                        index={0}
                    />
                    <SkillIcon
                        icon={() => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                        </svg>}
                        label="Fast Learner"
                        index={1}
                    />
                    <SkillIcon
                        icon={() => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg>}
                        label="Team Player"
                        index={2}
                    />
                    <SkillIcon
                        icon={() => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
                        </svg>}
                        label="Problem Solver"
                        index={3}
                    />
                    <SkillIcon
                        icon={() => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                        </svg>}
                        label="Growth Mindset"
                        index={4}
                    />
                    <SkillIcon
                        icon={() => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" />
                        </svg>}
                        label="Innovative"
                        index={5}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default About;