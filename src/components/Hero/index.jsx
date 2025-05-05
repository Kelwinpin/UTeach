import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="w-full px-6 py-20 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        <span className="relative inline-block">
                            <span className="text-orange-500 absolute -bottom-1 left-0 w-full h-2 bg-orange-300 z-[-1] rotate-[-2deg]" />
                            Teach
                        </span>{" "}
                        students worldwide
                    </h1>

                    <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                        Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 items-center">
                        <Link href="#" className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-md shadow hover:bg-orange-600 transition">
                            Sign Up Now
                        </Link>
                        <Link href="#" className="flex items-center text-blue-600 hover:underline font-medium">
                            <svg className="w-5 h-5 mr-2 fill-blue-600" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                            View Demo
                        </Link>
                    </div>

                    <div className="mt-10 text-gray-400 text-sm flex items-center gap-12">
                        <span className="whitespace-break-spaces w-30">
                            Trusted by leading companies
                        </span>
                        <div className="flex gap-12 mt-1">
                            <Image src="/images/icon1.webp" alt="Logo 1" width={25} height={31} />
                            <Image src="/images/icon2.webp" alt="Logo 2" width={25} height={31} />
                            <Image src="/images/icon3.webp" alt="Logo 3" width={25} height={31} />
                            <Image src="/images/icon4.webp" alt="Logo 4" width={25} height={31} />
                            <Image src="/images/icon5.webp" alt="Logo 5" width={25} height={31} />
                        </div>
                    </div>
                </div>

                {/* Right image area */}
                <div className="relative z-10 flex items-center justify-center">
                    <Image src="/images/hero.webp" alt="Hero Image" width={624} height={544} />
                </div>
            </div>
        </section>
    );
}
