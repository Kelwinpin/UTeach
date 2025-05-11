import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function Hero() {
    const partnerLogos = [
        { name: "Microsoft", src: "/images/icon1.webp", width: 25, height: 31 },
        { name: "Google", src: "/images/icon2.webp", width: 25, height: 31 },
        { name: "Amazon", src: "/images/icon3.webp", width: 25, height: 31 },
        { name: "Apple", src: "/images/icon4.webp", width: 25, height: 31 },
        { name: "Facebook", src: "/images/icon5.webp", width: 25, height: 31 }
    ];

    return (
        <section
            className="w-full px-6 py-20 md:py-32 bg-white"
            id="hero-section"
            aria-labelledby="hero-heading"
            itemScope
            itemType="https://schema.org/WPHeader"
        >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                    <h1
                        id="hero-heading"
                        className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl relative"
                        itemProp="headline"
                    >

                        Teach students
                        <div
                            className="absolute md:top-10 md:-left-2 top-8 -left-2 w-24 md:w-48 h-4 inset-0 z-0 bg-[url('/images/lineOrange.webp')] bg-no-repeat bg-contain pointer-events-none"
                            aria-hidden="true"
                        />
                        <br />
                        worldwide
                    </h1>

                    <p
                        className="mt-6 text-gray-600 text-lg leading-relaxed"
                        itemProp="description"
                    >
                        Connect with students globally through our innovative online teaching platform.
                        Create engaging courses, interact with learners in real-time, and expand your
                        educational reach beyond geographical boundaries.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 items-center">
                        <Link
                            href="/signup"
                            className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-md shadow hover:bg-orange-600 transition"
                            aria-label="Sign up for an account"
                            data-tracking="cta-sign-up"
                            role="button"
                        >
                            Sign Up Now
                        </Link>
                        <Link
                            href="/demo"
                            className="flex items-center text-blue-600 hover:underline font-medium"
                            aria-label="Watch our product demonstration video"
                            data-tracking="cta-demo"
                            role="button"
                        >
                            <svg
                                className="w-5 h-5 mr-2 fill-blue-600"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                focusable="false"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                            View Demo
                        </Link>
                    </div>

                    <div
                        className="mt-10 text-gray-400 text-sm flex md:items-center items-baseline md:gap-12 md:flex-row flex-col"
                        itemScope
                        itemType="https://schema.org/Organization"
                    >
                        <span className="md:whitespace-break-spaces md:w-30 font-medium">
                            Trusted by leading companies
                        </span>
                        <div className="flex md:gap-12 gap-6 md:mt-1 mt-6" aria-label="Our trusted partners">
                            <Suspense fallback={<div className="h-8 w-32"></div>}>
                                {partnerLogos.map((logo, index) => (
                                    <div
                                        key={index}
                                        className="partner-logo"
                                        itemProp="member"
                                        itemScope
                                        itemType="https://schema.org/Organization"
                                    >
                                        <meta itemProp="name" content={logo.name} />
                                        <Image
                                            src={logo.src}
                                            alt={`${logo.name} logo - trusted partner`}
                                            width={logo.width}
                                            height={logo.height}
                                            loading={index <= 1 ? "eager" : "lazy"}
                                            className="object-contain"
                                            itemProp="logo"
                                        />
                                    </div>
                                ))}
                            </Suspense>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 flex items-center justify-center overflow-hidden">
                    <figure
                        className="m-0"
                        itemScope
                        itemType="https://schema.org/ImageObject"
                    >
                        <Image
                            src="/images/hero.webp"
                            alt="Teacher connecting with students worldwide through online classes"
                            width={624}
                            height={544}
                            priority={true}
                            quality={90}
                            className="w-full h-auto object-cover rounded-lg"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            itemProp="contentUrl"
                        />
                        <meta itemProp="description" content="Teacher connecting with students worldwide through online classes" />
                    </figure>
                </div>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Online Teaching Platform",
                        "description": "Connect with students globally through our innovative online teaching platform.",
                        "provider": {
                            "@type": "Organization",
                            "name": "Uteach",
                            "logo": "https://yourdomain.com/images/logo.webp"
                        },
                        "offers": {
                            "@type": "Offer",
                            "url": "https://vercel.com/signup"
                        }
                    })
                }}
            />
        </section>
    );
}