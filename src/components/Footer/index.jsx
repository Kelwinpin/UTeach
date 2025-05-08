"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Globe, ArrowRight, Facebook } from 'lucide-react';

export default function Footer() {
    const [language, setLanguage] = useState('EN');
    const [currency, setCurrency] = useState('EUR');

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-12" aria-label="Site footer">
            <div className="container mx-auto px-5">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-12">
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center">
                            <span className="text-white text-2xl font-bold">
                                <span className="text-orange-500">u</span>teach
                            </span>
                        </Link>
                    </div>

                    <div>
                        <h3 className="font-medium text-lg mb-4">Product</h3>
                        <nav aria-label="Product navigation">
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/pricing" className="text-gray-300 hover:text-white transition duration-200">
                                        Pricing
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/overview" className="text-gray-300 hover:text-white transition duration-200">
                                        Overview
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/browse" className="text-gray-300 hover:text-white transition duration-200">
                                        Browse
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/accessibility" className="text-gray-300 hover:text-white transition duration-200 flex items-center">
                                        Accessibility
                                        <span className="ml-2 text-xs bg-pink-600 text-white px-1 py-0.5 rounded">BETA</span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div>
                        <h3 className="font-medium text-lg mb-4">Solutions</h3>
                        <nav aria-label="Solutions navigation">
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/brainstorming" className="text-gray-300 hover:text-white transition duration-200">
                                        Brainstorming
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/ideation" className="text-gray-300 hover:text-white transition duration-200">
                                        Ideation
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/wireframing" className="text-gray-300 hover:text-white transition duration-200">
                                        Wireframing
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/research" className="text-gray-300 hover:text-white transition duration-200">
                                        Research
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div>
                        <h3 className="font-medium text-lg mb-4">Resources</h3>
                        <nav aria-label="Resources navigation">
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/help-center" className="text-gray-300 hover:text-white transition duration-200">
                                        Help Center
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog" className="text-gray-300 hover:text-white transition duration-200">
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/tutorials" className="text-gray-300 hover:text-white transition duration-200">
                                        Tutorials
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/faqs" className="text-gray-300 hover:text-white transition duration-200">
                                        FAQs
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div>
                        <h3 className="font-medium text-lg mb-4">Support</h3>
                        <nav aria-label="Support navigation">
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/contact-us" className="text-gray-300 hover:text-white transition duration-200">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/developers" className="text-gray-300 hover:text-white transition duration-200">
                                        Developers
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/documentation" className="text-gray-300 hover:text-white transition duration-200">
                                        Documentation
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/integrations" className="text-gray-300 hover:text-white transition duration-200">
                                        Integrations
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div>
                        <h3 className="font-medium text-lg mb-4">Company</h3>
                        <nav aria-label="Company navigation">
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/about" className="text-gray-300 hover:text-white transition duration-200">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/press" className="text-gray-300 hover:text-white transition duration-200">
                                        Press
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/events" className="text-gray-300 hover:text-white transition duration-200">
                                        Events
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/request-demo"
                                        className="text-white hover:text-gray-200 font-medium flex items-center transition duration-200"
                                    >
                                        Request Demo
                                        <ArrowRight className="ml-1 h-4 w-4" />
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="h-px bg-gray-700 mb-8"></div>

                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-gray-400 text-sm">
                            uteach @ {currentYear}. All rights reserved.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-6 items-center">
                        <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition duration-200">
                            Terms
                        </Link>
                        <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition duration-200">
                            Privacy
                        </Link>
                        <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition duration-200">
                            Contact
                        </Link>

                        <button
                            className="flex items-center text-gray-400 hover:text-white text-sm transition duration-200"
                            aria-label="Change language"
                        >
                            <Globe className="h-4 w-4 mr-1" />
                            <span>{language}</span>
                        </button>

                        <button
                            className="flex items-center text-gray-400 hover:text-white text-sm transition duration-200"
                            aria-label="Change currency"
                        >
                            <span>€</span>
                            <span className="ml-1">{currency}</span>
                        </button>

                        <Link href="https://facebook.com" aria-label="Facebook page" className="text-gray-400 hover:text-white transition duration-200">
                            <Facebook className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}