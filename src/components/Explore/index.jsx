"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function ExploreSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkDevice();
    
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`w-full py-16 md:py-32 bg-white transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      aria-labelledby="explore-heading"
      itemScope
      itemType="https://schema.org/EducationalOrganization"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <Image 
                src="/plane.svg"
                alt="Ícone de avião representando conexões internacionais" 
                width={isMobile ? 24 : 48}
                height={isMobile ? 24 : 48}
                className="absolute -top-8 right-0 md:-top-14 md:left-82 transform rotate-12"
                aria-hidden="true"
              />
              
              <h2 
                id="explore-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0B0B28] mb-6"
                itemProp="name"
              >
                Meet international students <br className="hidden sm:block" />& teachers
              </h2>
            </div>
            
            <p 
              className="text-base md:text-lg text-[#0B0B28]/80 mb-8 max-w-xl"
              itemProp="description"
            >
              Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc.
              Eget commodo eget in aliquam facilisis facilisi nec magna hendrerit.
            </p>

            <Link
              href="/explore"
              className="group inline-flex items-center text-blue-600 font-medium hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              aria-label="Explore professores e estudantes internacionais"
              itemProp="url"
            >
              <span>Explore teachers and students</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-1 transform transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                aria-hidden="true"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </Link>
          </div>

          <div className="order-2">
            <div className="relative overflow-hidden rounded-lg">
              <div className="aspect-square md:h-auto relative">
                <Image
                  src="/images/images.webp"
                  alt="Estudantes e professores internacionais interagindo em ambiente educacional"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={!isMobile}
                  className="object-cover h-full w-full"
                  itemProp="image"
                  loading={isMobile ? "lazy" : "eager"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}