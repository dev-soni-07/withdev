import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-50 py-2 mt-auto">
            <div className="text-center p-4">
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
        </footer>
    );
}

export default Footer;
