"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote: "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
    name: "Hellen Jummy",
    role: "Financial Counselor",
    image: "/images/UserThumb2.webp",
  },
  {
    quote: "Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultricies nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor.",
    name: "Ralph Edwards",
    role: "Math Teacher",
    image: "/images/UserThumb1.webp",
  },
  {
    quote: "Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.",
    name: "Hellena John",
    role: "Psychology Student",
    image: "/images/UserThumb3.webp",
  },
];

export default function Depoiments() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 px-6 bg-white text-center">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#0B0B28] mb-8">What everyone says</h2>
            <div className="flex gap-2">
                <button
                    onClick={prevTestimonial}
                    className="text-orange-400 text-2xl justify-center items-center hover:text-orange-800 transition cursor-pointer h-10 w-10 border-2 border-orange-400 rounded-full"
                >
                    &#60;
                </button>
                <button
                    onClick={nextTestimonial}
                    className="text-orange-400 text-2xl hover:text-orange-800 transition cursor-pointer border-2 border-orange-400 rounded-full h-10 w-10"
                >
                    &#62;
                </button>
            </div>
        </div>
        <div className="flex gap-3">
            {
                testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white shadow-xl rounded-xl p-8 space-y-6 mx-auto max-w-xl">
                        <p className="text-lg text-gray-700">{testimonial.quote}</p>
                        <div className="flex items-center space-x-4">
                            <Image
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-12 h-12 rounded-full"
                                width={48}
                                height={48}
                            />
                            <div className="flex flex-col align-baseline">
                                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                                <span className="text-sm text-gray-500">{testimonial.role}</span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </section>
  );
}