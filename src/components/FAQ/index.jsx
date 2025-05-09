"use client";

import Image from "next/image";
import Link from "next/link";
import Card from "../Card";
import { useEffect, useState, useRef } from "react";
import { useInView } from 'react-intersection-observer';

const lessons = [
  {
    id: "lesson-featured",
    label: "Featured",
    labelColor: "bg-purple-100 text-purple-600",
    title: "The map of mathematics",
    description: "Comprehensive guide to mathematical concepts, formulas, and practical applications.",
    href: "/lessons/map-of-mathematics",
    image: "/images/math-icon.webp"
  },
  {
    id: "lesson-popular",
    label: "Popular",
    labelColor: "bg-blue-100 text-blue-600",
    title: "Design for how people think",
    description: "Learn UX principles based on cognitive psychology and user behavior patterns.",
    href: "/lessons/design-thinking",
    image: "/images/design-icon.webp"
  },
  {
    id: "lesson-new",
    label: "New",
    labelColor: "bg-green-100 text-green-600",
    title: "International & commercial law",
    description: "Essential legal concepts for global business operations and international trade.",
    href: "/lessons/international-law",
    image: "/images/law-icon.webp"
  },
];

export default function AppFeatures() {
  const [visibleLessons, setVisibleLessons] = useState(lessons);
  const sectionRef = useRef(null);
  const { ref: animationRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setVisibleLessons(lessons.slice(0, 2));
      } else if (width < 1024) {
        setVisibleLessons(lessons.slice(0, 3));
      } else {
        setVisibleLessons(lessons);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const appFeatures = [
    {
      id: "feature-1",
      text: "Interactive lessons with real-time feedback and practice exercises",
      icon: "/check.svg"
    },
    {
      id: "feature-2",
      text: "Personalized learning paths based on your skill level and goals",
      icon: "/check.svg"
    },
    {
      id: "feature-3",
      text: "Progress tracking with detailed analytics and performance insights",
      icon: "/check.svg"
    }
  ];

  return (
    <section
      id="app-features"
      className="w-full px-4 sm:px-6 py-16 sm:py-20 md:py-32 bg-white overflow-x-hidden"
      ref={sectionRef}
      aria-labelledby="features-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
        <div
          className={`transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}
          ref={animationRef}
          itemScope
          itemType="https://schema.org/Product"
        >
          <meta itemProp="name" content="Uteach Learning Platform" />

          <h2
            id="features-heading"
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#0B0B28] leading-tight relative z-2"
            itemProp="description"
          >
            An all-in-one app
            <div
              className="absolute md:top-14 md:left-24 top-7 left-8 w-36 md:w-48 h-4 inset-0 z-0 bg-[url('/images/lineOrangeBigger.webp')] bg-no-repeat bg-contain pointer-events-none"
              aria-hidden="true"
            />
            <br />
            that makes learning easier
          </h2>

          <ul
            className="text-[#0B0B28]/80 text-base space-y-3 my-8"
            aria-label="Key app features"
            itemProp="hasFeature"
          >
            {appFeatures.map((feature) => (
              <li
                key={feature.id}
                id={feature.id}
                className="flex items-start gap-2"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <Image
                  src={feature.icon}
                  alt="Feature check mark"
                  width={24}
                  height={24}
                  className="flex-shrink-0 mt-1"
                  aria-hidden="true"
                />
                <span itemProp="name">{feature.text}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/app-features"
            className="text-blue-600 font-medium hover:underline inline-flex items-center group transition-all duration-300"
            aria-label="Learn more about our app features"
            itemProp="url"
          >
            Find more about the app
            <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>

        <div className="mt-25 md:mt-0 relative">
          <div
            className="absolute md:-top-30 md:left-80 inset-0 z-1 bg-[url('/images/bg-faq.webp')] bg-no-repeat bg-contain pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute sm:-left-20 md:left-20 -top-30 md:w-7xl inset-0 z-0 bg-[url('/images/blob.webp')] bg-no-repeat bg-contain pointer-events-none"
            aria-hidden="true"
          />

          <figure
            className="relative z-2 md:left-10 lg:left-20 rounded-xl overflow-hidden"
            itemScope
            itemType="https://schema.org/ImageObject"
          >
            <Image
              src="/images/desktop.webp"
              alt="Uteach learning platform interface showing interactive lessons"
              width={800}
              height={400}
              className="w-full object-cover rounded-xl"
              loading="eager"
              quality={90}
              sizes="(max-width: 768px) 100vw, 50vw"
              itemProp="contentUrl"
            />
            <meta itemProp="description" content="Screenshot of the Uteach learning platform interface showing interactive lessons" />
          </figure>

          <div
            className="relative z-2 -mt-16 sm:-mt-18 md:-mt-25 grid grid-cols-2 md:grid-cols-3 sm:gap-10 gap-25 md:px-0"
            aria-label="Featured lessons"
            itemScope
            itemType="https://schema.org/ItemList"
          >
            {visibleLessons.map((lesson, index) => (
              <div
                key={lesson.id}
                className="transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Course"
              >
                <meta itemProp="position" content={String(index + 1)} />
                <meta itemProp="name" content={lesson.title} />
                <meta itemProp="description" content={lesson.description} />
                <link itemProp="url" href={'#'} />
                <Card {...lesson} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Uteach Learning Platform",
            "applicationCategory": "EducationalApplication",
            "operatingSystem": "All",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "1024"
            }
          })
        }}
      />
    </section>
  );
}