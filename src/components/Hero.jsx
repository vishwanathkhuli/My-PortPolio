import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FiLinkedin, FiGithub, FiMail, FiBriefcase } from 'react-icons/fi';
import Typewriter from 'typewriter-effect';

const Hero = () => {
    const [key, setKey] = useState(0);
    const controls = useAnimation();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.3,
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    };

    const nameVariants = {
        hidden: { y: -50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "tween",
                stiffness: 120,
                damping: 10
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
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

    const roles = [
        "Full Stack Web Developer",
        "Java Developer",
        "Spring Boot Developer",
        "React Developer",
        "Front End Developer",
        "Backend Developer"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setKey(prevKey => prevKey + 1);
            controls.start("visible");
        }, 60000);

        return () => clearInterval(timer);
    }, [controls]);

    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden pt-16 px-4 sm:px-6 lg:px-8">
            <motion.div
                className="w-full max-w-7xl mx-auto text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    key={key}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 text-yellow-600 dark:text-yellow-300 drop-shadow-2xl transition-transform duration-300 ease-in-out"
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        textShadow: "0 0 10px rgba(255,215,0,0.6), 0 0 20px rgba(255,215,0,0.4), 0 0 30px rgba(255,215,0,0.2)"
                    }}
                >
                    {"Vishwanath Khuli".split('').map((char, index) => (
                        <motion.span
                            key={index}
                            initial={{
                                opacity: 0,
                                x: Math.random() * 500 - 250,
                                y: Math.random() * 500 - 250,
                                rotate: Math.random() * 360
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                y: 0,
                                rotate: 0
                            }}
                            transition={{
                                type: "spring",
                                damping: 10,
                                stiffness: 100,
                                delay: index * 0.1
                            }}
                            whileHover={{
                                scale: 1.2,
                                color: "#FFD700",
                                textShadow: "0 0 15px rgba(255,215,0,0.8)",
                            }}
                        >
                            {char === ' ' ? '\u00A0' : char}
                        </motion.span>
                    ))}
                </motion.div>
                <motion.h2
                    className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 text-gray-700 dark:text-gray-300 font-semibold h-12"
                    variants={itemVariants}
                    whileHover="hover"
                >
                    <Typewriter
                        options={{
                            strings: roles,
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 50,
                            delay: 50,
                        }}
                    />
                </motion.h2>
                <motion.p
                    className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                    variants={itemVariants}
                    whileHover="hover"
                >
                    Crafting innovative, scalable, and user-centric web solutions that transform ideas into digital realities
                </motion.p>
                <motion.div
                    className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-16"
                    variants={itemVariants}
                >
                    <SocialLink href="https://www.linkedin.com/in/yourprofile" icon={FiLinkedin} label="LinkedIn" />
                    <SocialLink href="https://github.com/vishwanathkhuli" icon={FiGithub} label="GitHub" />
                    <SocialLink href="mailto:vishwanathkhuli347@gmail.com" icon={FiMail} label="Email" />
                    <SocialLink href="https://www.naukri.com/mnjuser/profile" icon={FiBriefcase} label="Naukri" />
                    <SocialLink href="https://www.hirist.com/profile/" icon={FiBriefcase} label="Hirist" />
                </motion.div>
                <motion.div
                    className="flex flex-wrap justify-center items-center gap-4 sm:gap-8"
                    variants={itemVariants}
                >
                    <Button href="#projects">
                        Explore My Work
                    </Button>
                    <Button href="#contact">
                        Get In Touch
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    );
};

const SocialLink = ({ href, icon: Icon, label }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300 tooltip"
        data-tooltip={label}
        whileHover={{ scale: 1.2, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
    >
        <Icon size={24} className="sm:w-8 sm:h-8" />
    </motion.a>
);

const Button = ({ href, children }) => (
    <motion.a
        href={href}
        className="font-bold py-2 px-4 sm:py-3 sm:px-8 rounded-full transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700 border-2 border-blue-600 hover:border-blue-700 text-sm sm:text-base"
        whileHover={{
            scale: 1.05,
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
            backgroundColor: "#2563EB",
            borderColor: "#2563EB"
        }}
        whileTap={{ scale: 0.95 }}
    >
        {children}
    </motion.a>
);

export default Hero;