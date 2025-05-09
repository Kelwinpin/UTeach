"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        quote: "Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.",
        name: "Marie Poirot",
        company: "Bigapp",
        image: "/images/slider.webp",
        alt: "Marie Poirot da Bigapp"
    },
    {
        quote: "Nunc cursus sit amet volutpat consequat mauris. Amet volutpat consequat mauris. Faucibus interdum posuere lorem ipsum dolor sit.",
        name: "John Doe",
        company: "TechLabs",
        image: "/images/slider.webp",
        alt: "John Doe da TechLabs"
    },
    {
        quote: "Aliquam faucibus purus in massa tempor nec feugiat nisl. Dignissim suspendisse in est ante in. Arcu dui vivamus arcu felis bibendum ut tristique et.",
        name: "Jane Smith",
        company: "Creative Solutions",
        image: "/images/slider.webp",
        alt: "Jane Smith da Creative Solutions"
    },
];

export default function TestimonialSlider() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const autoPlayRef = useRef(null);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        pauseAutoPlay();
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        pauseAutoPlay();
    };

    const goToTestimonial = (index) => {
        setCurrentTestimonial(index);
        pauseAutoPlay();
    };

    const pauseAutoPlay = () => {
        setIsAutoPlaying(false);
        if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
            setTimeout(() => setIsAutoPlaying(true), 10000);
        }
    };

    useEffect(() => {
        if (isAutoPlaying) {
            autoPlayRef.current = setInterval(() => {
                setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
            }, 5000);
        }

        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
            }
        };
    }, [isAutoPlaying]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowLeft") {
                prevTestimonial();
            } else if (e.key === "ArrowRight") {
                nextTestimonial();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <section
            className="w-full bg-[#FACC15] py-16 overflow-hidden"
            aria-label="Depoimentos de clientes"
        >
            <div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                itemScope
                itemType="https://schema.org/Review"
            >
                <h2 className="sr-only">Depoimentos</h2>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="text-black/80 space-y-6 order-2 md:order-1">
                        <blockquote
                            className="relative z-10"
                            itemProp="reviewBody"
                        >
                            <p className="text-lg sm:text-xl leading-relaxed">
                                {testimonials[currentTestimonial].quote}
                            </p>
                        </blockquote>

                        <div className="flex flex-col items-start gap-1">
                            <cite className="not-italic text-xl font-medium" itemProp="author">
                                {testimonials[currentTestimonial].name}
                            </cite>
                            <div className="font-semibold text-lg" itemProp="publisher">
                                {testimonials[currentTestimonial].company}
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-4">
                            <div className="flex space-x-2" role="tablist">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToTestimonial(index)}
                                        className={`h-3 w-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black ${currentTestimonial === index ? "bg-black" : "bg-white/50 hover:bg-white/80"
                                            }`}
                                        aria-selected={currentTestimonial === index}
                                        aria-label={`Depoimento ${index + 1} de ${testimonials.length}`}
                                        role="tab"
                                    />
                                ))}
                            </div>

                            <div className="flex space-x-4">
                                <button
                                    onClick={prevTestimonial}
                                    className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors focus:outline-none focus:ring-2 focus:ring-black"
                                    aria-label="Depoimento anterior"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={nextTestimonial}
                                    className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors focus:outline-none focus:ring-2 focus:ring-black"
                                    aria-label="Próximo depoimento"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="relative order-2 md:order-2">
                        <div className="aspect-square relative overflow-hidden">
                            <Image
                                src={testimonials[currentTestimonial].image}
                                alt={testimonials[currentTestimonial].alt}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority={currentTestimonial === 0}
                                className="object-cover object-center"
                                itemProp="image"
                                loading={currentTestimonial === 0 ? "eager" : "lazy"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}