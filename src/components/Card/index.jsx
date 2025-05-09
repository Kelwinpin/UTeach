"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Card({
  id,
  label,
  labelColor,
  title,
  description,
  href,
  image,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      id={id || `card-${title.toLowerCase().replace(/\s+/g, '-')}`}
      className="relative rounded-xl border border-gray-200 bg-white p-4 sm:p-5 md:p-6 shadow-md transition-all duration-300 
                hover:shadow-xl lg:w-52 w-full max-w-xs flex flex-col justify-between gap-2 h-full
                transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      itemScope
      itemType="https://schema.org/Course"
    >
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-start">
          <span
            className={`inline-block px-2 py-1 text-xs font-semibold rounded-md ${labelColor}`}
            aria-label={`${label} course`}
          >
            {label}
          </span>
        </div>

        <h3
          className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]"
          itemProp="name"
        >
          {title}
        </h3>

        <p
          className="text-xs sm:text-sm text-gray-600 line-clamp-3 flex-grow"
          itemProp="description"
        >
          {description}
        </p>
      </div>

      <div className="mt-4 flex justify-center">
        <Link
          href={href}
          className={`inline-block border-2 border-blue-500 text-blue-600 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium sm:font-semibold rounded-lg transition-all duration-300 w-full text-center
                      ${isHovered ? 'bg-blue-500 text-white' : 'hover:bg-blue-50'}`}
          itemProp="url"
          aria-label={`Take the ${title} lesson`}
        >
          <span className="flex items-center justify-center gap-1">
            Take Lesson
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </Link>
      </div>

      <meta itemProp="provider" content="Uteach" />
      <meta itemProp="educationalLevel" content="Beginner" />
      <link itemProp="url" href={`https://yourdomain.com${href}`} />
    </div>
  );
}