// src/components/Header.tsx

import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="sticky top-0 bg-gray-50 shadow-md z-20">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Left Side: Clickable Logo and Title */}
                <Link href="/" className="flex items-center space-x-2 cursor-pointer">
                    <img
                        src='https://res.cloudinary.com/dl2kja2kq/image/upload/v1730473483/logo1-bgremoved_z1yx3l.png'
                        alt="Logo"
                        className="h-8 w-8"
                    />
                    <h1 className="text-xl font-bold cursor-pointer">Date With Dev</h1>
                </Link>

                {/* Right Side: Desktop Navigation */}
                <nav className="hidden md:flex space-x-6">
                    {['Home', 'About', 'Projects', 'Contact'].map((tab, index) => (
                        <Link
                            key={index}
                            href={`#${tab.toLowerCase()}`}
                            className="hover:text-blue-600 transition-colors duration-200"
                        >
                            {tab}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden border-2 border-gray-600 rounded-lg flex items-center p-1">
                    <button onClick={handleMenuToggle} aria-label="Open menu">
                        <Bars3Icon className="h-6 w-6 text-gray-800" />
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar Menu with Framer Motion and AnimatePresence */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop with Motion Fade */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-gray-800 z-10"
                            onClick={closeMenu}
                        />

                        {/* Sidebar with Slide Animation */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="fixed inset-y-0 right-0 w-64 bg-white p-6 shadow-lg z-20"
                        >
                            <div className='flex flex-col justify-between h-full'>
                                <div>
                                    <button
                                        onClick={closeMenu}
                                        className="flex items-center justify-center mb-4 border-2 border-gray-600 rounded-lg p-1"
                                        aria-label="Close menu"
                                    >
                                        <XMarkIcon className="h-6 w-6 text-gray-800" />
                                    </button>
                                    <nav className="flex flex-col space-y-4">
                                        {['Home', 'About', 'Projects', 'Contact'].map((tab, index) => (
                                            <Link
                                                key={index}
                                                href={`#${tab.toLowerCase()}`}
                                                className="text-lg font-medium hover:text-blue-600 transition-colors duration-200"
                                                onClick={closeMenu}
                                            >
                                                {tab}
                                            </Link>
                                        ))}
                                    </nav>
                                </div>
                                <div className="text-center">
                                    <p className="text-sm md:text-base lg:text-lg">
                                        Made with ❤️ by{' '}
                                        <a
                                            href="https://www.instagram.com/datewithdev/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline"
                                        >
                                            Dev
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
