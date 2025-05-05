'use client'; // se estiver usando app router

import Image from 'next/image';

export default function Header() {
    return (
        <header className="w-full flex justify-between items-center py-4 px-8 shadow-sm">
            <div className="flex items-center gap-10">
                <div className="flex items-center">
                    <Image src="/images/logo.webp" alt="Uteach logo" width={100} height={24} />
                </div>
                <nav className="hidden md:flex items-center gap-6 text-sm text-gray-800 font-medium">
                    <a href="#" className="hover:text-orange-500">Products</a>
                    <a href="#" className="hover:text-orange-500">Solutions</a>
                    <a href="#" className="hover:text-orange-500">Pricing</a>
                    <div className="relative group">
                        <button className="flex items-center gap-1 hover:text-orange-500">
                            Resources
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M5.25 7.25L10 12.25L14.75 7.25H5.25Z" />
                            </svg>
                        </button>
                    </div>
                </nav>
            </div>

            <div className="flex items-center gap-4 text-sm">
                <a href="#" className="text-gray-800 hover:text-orange-500">Log In</a>
                <a href="#" className="px-4 py-2 border border-gray-800 rounded hover:bg-gray-100 transition">
                    Sign Up Now
                </a>
            </div>
        </header>
    );
}