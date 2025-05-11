"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function StatisticsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const statistics = [
    {
      title: "User Countries",
      number: "195",
      iconPath: "/diamond.svg",
      description: "Countries where our platform is being used",
      ariaLabel: "195 countries where our platform is used"
    },
    {
      title: "Valued Teachers",
      number: "1M",
      iconPath: "/heart-circle-sharp.svg",
      description: "Qualified teachers registered on our platform",
      ariaLabel: "One million qualified teachers"
    },
    {
      title: "Happy Students",
      number: "17M",
      iconPath: "/school.svg",
      description: "Students learning through our platform worldwide",
      ariaLabel: "Seventeen million students"
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
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
      className={`bg-[#0B0B28] py-16 w-full transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-label="Key statistics and achievements"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="sr-only">Our Impact in Numbers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statistics.map((stat, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center text-center p-6 transition-all duration-300 ${
                isVisible ? "translate-y-0" : "translate-y-4"
              }`}
              itemScope
              itemProp="itemListElement" 
              itemType="https://schema.org/ListItem"
            >
              <div className="mb-4 relative w-16 h-16">
                <Image
                  src={stat.iconPath}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              </div>
              
              <div 
                className="text-[#FACC15] text-5xl md:text-6xl lg:text-7xl font-bold mb-2 tabular-nums"
                aria-label={stat.ariaLabel}
                itemProp="value"
              >
                {stat.number}
              </div>
              
              <h3 
                className="text-[#FACC15] text-xl font-medium capitalize mb-1"
                itemProp="name"
              >
                {stat.title}
              </h3>
              
              <p 
                className="text-yellow-100/80 text-sm max-w-xs"
                itemProp="description"
              >
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}