"use client";

import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    quote: "Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.",
    name: "Marie Poirot",
    company: "Bigapp",
    image: "/images/slider.webp",
  },
  {
    quote: "Nunc cursus sit amet volutpat consequat mauris. Amet volutpat consequat mauris. Faucibus interdum posuere lorem ipsum dolor sit.",
    name: "John Doe",
    company: "TechLabs",
    image: "/images/slider.webp",
  },
  {
    quote: "Aliquam faucibus purus in massa tempor nec feugiat nisl. Dignissim suspendisse in est ante in. Arcu dui vivamus arcu felis bibendum ut tristique et.",
    name: "Jane Smith",
    company: "Creative Solutions",
    image: "/images/slider.webp",
  },
];

export default function Slider() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const nextTestimonial = () => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };
  
    const prevTestimonial = () => {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };
    return (
        <section className="w-full bg-[#FACC15] pt-10 overflow-x-hidden">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 md:gap-12 items-center relative gap-0">
                <div className="text-black/80 text-xl space-y-4 mb-8 px-10">
                    <div className="relative z-10">
                        <p className="text-xl">{testimonials[currentTestimonial].quote}</p>
                    </div>
                    <div className="flex flex-col items-baseline gap-2">
                        <div className="text-xl">{testimonials[currentTestimonial].name},</div>
                        <div className="font-semibold text-lg">{testimonials[currentTestimonial].company}</div>
                    </div>

                    <div className="flex space-x-2">
                        {testimonials.map((_, index) => (
                        <div
                            key={index}
                            className={`h-2 w-2 rounded-full ${
                            currentTestimonial === index ? "bg-black" : "bg-white/50"
                            }`}
                        />
                        ))}
                    </div>

                    <div className="absolute top-1/2 -left-20 -translate-y-1/2 pl-4 z-10 md:flex hidden">
                        <button
                        onClick={prevTestimonial}
                        className="text-white text-3xl bg-transparent border-0 cursor-pointer"
                        >
                        &#60;
                        </button>
                    </div>
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 pr-4 z-10 md:flex hidden">
                        <button
                        onClick={nextTestimonial}
                        className="text-white text-3xl bg-transparent border-0 cursor-pointer"
                        >
                        &#62;
                        </button>
                    </div>
                </div>

                <div className="relative md:bottom-0 bottom-20">
                    <Image
                        src={testimonials[currentTestimonial].image}
                        alt="Testimonial"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </section>
    );
}