import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
    return (
        <section className="relative bg-yellow-400 w-full overflow-hidden py-16 md:py-24 lg:py-32" aria-labelledby="join-learning-heading">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[500px] md:min-h-[600px]">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 w-full max-w-lg md:max-w-xl text-center">
                    <h2
                        id="join-learning-heading"
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 md:mb-6"
                    >
                        Join a world of learning
                    </h2>
                    <p className="text-base md:text-lg text-black/80 mb-4 md:mb-6 max-w-md mx-auto">
                        Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
                    </p>
                    <p className="text-base md:text-lg text-black/80 mb-8 md:mb-10 max-w-md mx-auto">
                        Risus elit et fringilla habitant ut facilisi.
                    </p>
                    <Link
                        href="/signup"
                        className="inline-flex items-center justify-center px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors duration-300 text-lg"
                    >
                        Sign Up Now
                    </Link>
                </div>

            </div>
        </section>
    );
}