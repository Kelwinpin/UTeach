import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="w-full flex flex-1 justify-between items-center py-4 px-8 shadow-sm">
            <div className="flex items-center gap-10">
                <div className="flex items-center">
                    <Image src="/images/logo.webp" alt="Uteach logo" width={100} height={24} />
                </div>
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

            <div className="flex items-center gap-4 text-sm">
                <Link href="#" className="text-primary hover:text-orange-500">Log In</Link>
                <Link href="#" className="px-4 py-2 border-2 border-primary rounded hover:bg-gray-100 transition">
                    Sign Up Now
                </Link>
            </div>
        </header>
    );
}