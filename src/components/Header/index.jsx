'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { usePathname } from 'next/navigation';
import Script from 'next/script';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && !event.target.closest('header')) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    const navItems = [
        { name: 'Products', href: '#', ariaLabel: 'View our products' },
        { name: 'Solutions', href: '#', ariaLabel: 'Explore our solutions' },
        { name: 'Pricing', href: '#', ariaLabel: 'Check our pricing plans' }
    ];

    return (
        <>
            <Head>
                <title>Uteach - Online Learning Platform</title>
                <meta name="description" content="Discover Uteach's online learning platform - Courses, solutions and resources for teachers and students" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href={`https://vercel.com${pathname}`} />
            </Head>

            <Script id="organization-schema" type="application/ld+json" strategy="afterInteractive">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Uteach",
                        "url": "https://vercel.com",
                        "logo": "https://vercel.com/images/logo.webp",
                        "sameAs": [
                            "https://www.facebook.com/uteach",
                            "https://www.linkedin.com/company/uteach",
                            "https://twitter.com/uteach"
                        ]
                    }
                `}
            </Script>

            <header
                className={`w-full sticky top-0 z-50 bg-white ${scrolled ? 'shadow-md' : 'shadow-sm'
                    } transition-all duration-300 lg:py-6 lg:px-20 px-5 py-5`}
                role="banner"
                aria-label="Site header"
            >
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-10">
                        <Link href="/" aria-label="Uteach homepage">
                            <Image
                                src="/images/logo.webp"
                                alt="Uteach logo"
                                width={100}
                                height={24}
                                priority={true}
                                quality={90}
                            />
                        </Link>

                        <nav
                            className="hidden md:flex items-center gap-6 text-sm text-primary font-medium"
                            aria-label="Main navigation"
                        >
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`hover:text-orange-500 transition-colors ${pathname === item.href ? 'font-semibold text-orange-500' : ''
                                        }`}
                                    aria-label={item.ariaLabel}
                                    aria-current={pathname === item.href ? 'page' : undefined}
                                >
                                    {item.name}
                                </Link>
                            ))}

                            <div className="relative group">
                                <button
                                    className="flex items-center gap-1 hover:text-orange-500 transition-colors"
                                    aria-expanded={isOpen}
                                    aria-haspopup="true"
                                    aria-controls="resources-dropdown"
                                >
                                    Resources
                                    <svg
                                        className="w-4 h-4 transition-transform group-hover:rotate-180"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path d="M5.25 7.25L10 12.25L14.75 7.25H5.25Z" />
                                    </svg>
                                </button>
                                <div
                                    id="resources-dropdown"
                                    className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block"
                                    role="menu"
                                >
                                    <Link
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        role="menuitem"
                                    >
                                        Blog
                                    </Link>
                                    <Link
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        role="menuitem"
                                    >
                                        Guides
                                    </Link>
                                    <Link
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        role="menuitem"
                                    >
                                        Webinars
                                    </Link>
                                </div>
                            </div>
                        </nav>
                    </div>

                    <div className="hidden md:flex items-center gap-4 text-sm">
                        <Link
                            href="/login"
                            className="text-primary hover:text-orange-500 transition-colors"
                            aria-label="Log in to your account"
                        >
                            Log In
                        </Link>
                        <Link
                            href="/signup"
                            className="px-4 py-2 border-2 border-primary rounded hover:bg-gray-100 transition-all"
                            aria-label="Sign up for a new account"
                        >
                            Sign Up Now
                        </Link>
                    </div>

                    <button
                        className="md:hidden text-primary p-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        aria-label="Toggle mobile menu"
                        aria-controls="mobile-menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>

                    {isOpen && (
                        <div
                            id="mobile-menu"
                            className="absolute top-16 left-0 right-0 bg-white z-50 flex flex-col items-start p-6 shadow-md md:hidden text-sm text-primary font-medium"
                            role="navigation"
                            aria-label="Mobile navigation"
                        >
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`py-2 w-full hover:text-orange-500 transition-colors ${pathname === item.href ? 'font-semibold text-orange-500' : ''
                                        }`}
                                    aria-label={item.ariaLabel}
                                    aria-current={pathname === item.href ? 'page' : undefined}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}

                            <button
                                className="py-2 w-full text-left flex items-center justify-between hover:text-orange-500"
                                aria-expanded="false"
                                aria-controls="mobile-resources"
                            >
                                Resources
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M5.25 7.25L10 12.25L14.75 7.25H5.25Z" />
                                </svg>
                            </button>

                            <hr className="my-2 w-full border-gray-200" />

                            <Link
                                href="#"
                                className="py-2 w-full hover:text-orange-500 transition-colors"
                                aria-label="Log in to your account"
                                onClick={() => setIsOpen(false)}
                            >
                                Log In
                            </Link>

                            <Link
                                href="#"
                                className="py-2 w-full border border-primary text-center rounded hover:bg-gray-100 transition-all"
                                aria-label="Sign up for a new account"
                                onClick={() => setIsOpen(false)}
                            >
                                Sign Up Now
                            </Link>
                        </div>
                    )}
                </div>
            </header>
        </>
    );
}