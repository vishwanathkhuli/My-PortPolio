import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaComment, FaPaperPlane, FaPhone } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        phone: '',
    });
    const [status, setStatus] = useState('');

    useEffect(() => {
        // Initialize EmailJS with User ID from .env
        emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        try {
            console.log('Attempting to send email...');

            // Send email using EmailJS with values from .env
            const result = await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_email: 'vishwanathkhuli347@gmail.com',
                }
            );

            console.log('EmailJS result:', result);

            // Send WhatsApp message
            const whatsappNumber = '9019393599'; // Fixed WhatsApp number
            const whatsappMessage = encodeURIComponent(`New message from ${formData.name}:\n\nEmail: ${formData.email}\n\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`);
            window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');

            setStatus('Message sent successfully!');
            setFormData({ name: '', email: '', message: '', phone: '' });
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('Failed to send message. Please try again.');
        }
    };

    const inputVariants = {
        focus: { scale: 1.02, transition: { duration: 0.2 } },
    };

    return (
        <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="max-w-md mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">Contact Me</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <motion.div variants={inputVariants} whileFocus="focus" className="relative">
                                <FaUser className="absolute top-3 left-3 text-gray-400" />
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                />
                            </motion.div>
                            <motion.div variants={inputVariants} whileFocus="focus" className="relative">
                                <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    required
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                />
                            </motion.div>
                            <motion.div variants={inputVariants} whileFocus="focus" className="relative">
                                <FaPhone className="absolute top-3 left-3 text-gray-400" />
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Your Phone Number"
                                    required
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                />
                            </motion.div>
                            <motion.div variants={inputVariants} whileFocus="focus" className="relative">
                                <FaComment className="absolute top-3 left-3 text-gray-400" />
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    required
                                    rows="4"
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                ></textarea>
                            </motion.div>
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 flex items-center justify-center"
                            >
                                <FaPaperPlane className="mr-2" />
                                Send Message
                            </motion.button>
                        </form>
                        {status && <p className="mt-4 text-center text-green-600 dark:text-green-400">{status}</p>}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;