'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full flex justify-between items-center py-4 px-6 shadow-sm">
            <div className="flex items-center gap-10">
                <Image src="/images/logo.webp" alt="Uteach logo" width={100} height={24} />

                <nav className="hidden md:flex items-center gap-6 text-sm text-primary font-medium">
                    <Link href="#" className="hover:text-orange-500">Products</Link>
                    <Link href="#" className="hover:text-orange-500">Solutions</Link>
                    <Link href="#" className="hover:text-orange-500">Pricing</Link>
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

            {/* Desktop buttons */}
            <div className="hidden md:flex items-center gap-4 text-sm">
                <Link href="#" className="text-primary hover:text-orange-500">Log In</Link>
                <Link href="#" className="px-4 py-2 border-2 border-primary rounded hover:bg-gray-100 transition">
                    Sign Up Now
                </Link>
            </div>

            <button
                className="md:hidden text-primary"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                    viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute top-16 left-0 right-0 bg-white z-50 flex flex-col items-start p-6 shadow-md md:hidden text-sm text-primary font-medium">
                    <Link href="#" className="py-2 w-full hover:text-orange-500">Products</Link>
                    <Link href="#" className="py-2 w-full hover:text-orange-500">Solutions</Link>
                    <Link href="#" className="py-2 w-full hover:text-orange-500">Pricing</Link>
                    <Link href="#" className="py-2 w-full hover:text-orange-500">Resources</Link>
                    <hr className="my-2 w-full border-gray-200" />
                    <Link href="#" className="py-2 w-full hover:text-orange-500">Log In</Link>
                    <Link href="#" className="py-2 w-full border border-primary text-center rounded hover:bg-gray-100">
                        Sign Up Now
                    </Link>
                </div>
            )}
        </header>
    );
}
