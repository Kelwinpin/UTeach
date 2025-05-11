"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Head from "next/head";

const testimonials = [
  {
    quote: "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
    name: "Hellen Jummy",
    role: "Financial Counselor",
    image: "/images/UserThumb2.webp",
    alt: "Foto de Hellen Jummy, Consultora Financeira",
  },
  {
    quote: "Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultricies nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor.",
    name: "Ralph Edwards",
    role: "Math Teacher",
    image: "/images/UserThumb1.webp",
    alt: "Foto de Ralph Edwards, Professor de Matemática",
  },
  {
    quote: "Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.",
    name: "Hellena John",
    role: "Psychology Student",
    image: "/images/UserThumb3.webp",
    alt: "Foto de Hellena John, Estudante de Psicologia",
  },
  {
    quote: "Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.",
    name: "Hellena John",
    role: "Psychology Student",
    image: "/images/UserThumb3.webp",
    alt: "Foto de Hellena John, Estudante de Psicologia",
  },
];

export default function ClientTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 763);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextTestimonial = () => {
    if (isMobile) {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    } else {
      setCurrentTestimonial((prev) => (prev + 3) % testimonials.length);
    }
  };

  const prevTestimonial = () => {
    if (isMobile) {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    } else {
      setCurrentTestimonial((prev) => (prev - 3 + testimonials.length) % testimonials.length);
    }
  };

  const displayedTestimonials = isMobile
    ? [testimonials[currentTestimonial]]
    : testimonials.slice(currentTestimonial, currentTestimonial + 3);

  const metaDescription = `Confira o que nossos clientes dizem: ${testimonials[0].name} (${testimonials[0].role}), ${testimonials[1].name} (${testimonials[1].role}) e outros compartilham suas experiências.`;

  return (
    <>
      <Head>
        <title>Depoimentos de Clientes | Nossa Empresa</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="depoimentos, clientes satisfeitos, avaliações, feedback, testimonials" />
        <meta property="og:title" content="Depoimentos de Clientes | Nossa Empresa" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/testimonials-og-image.jpg" />
        <link rel="canonical" href="https://www.seusite.com/depoimentos" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Nossa Empresa",
              "url": "https://www.seusite.com",
              "review": [
                ${testimonials.map(t => `{
                  "@type": "Review",
                  "reviewBody": "${t.quote}",
                  "author": {
                    "@type": "Person",
                    "name": "${t.name}"
                  }
                }`).join(',')}
              ]
            }
          `}
        </script>
      </Head>
      <section 
        className="py-24 px-6 bg-white text-center"
        id="testimonials"
        ref={testimonialsRef}
        aria-label="Depoimentos de clientes"
      >
        <div className="max-w-7xl mx-auto">
          <header className="flex justify-between items-center">
            <h1 className="text-3xl md:text-5xl font-semibold text-[#0B0B28] mb-8">
              O que nossos clientes dizem
            </h1>
            <div className="gap-2 md:flex hidden">
              <button
                onClick={prevTestimonial}
                className="text-orange-400 text-2xl hover:text-orange-800 transition cursor-pointer h-10 w-10 border-2 border-orange-400 rounded-full flex items-center justify-center"
                aria-label="Depoimento anterior"
              >
                <Image 
                  src={"/arrow-left.svg"}
                  alt="Seta para esquerda" 
                  width={24}
                  height={24}
                  loading="lazy"
                />
              </button>
              <button
                onClick={nextTestimonial}
                className="text-orange-400 text-2xl hover:text-orange-800 transition cursor-pointer border-2 border-orange-400 rounded-full h-10 w-10 flex items-center justify-center"
                aria-label="Próximo depoimento"
              >
                <Image 
                  src={"/arrow-right.svg"}
                  alt="Seta para direita" 
                  width={24}
                  height={24}
                  loading="lazy"
                />
              </button>
            </div>
          </header>

          <div className="flex flex-wrap gap-3 justify-center" role="list">
            {displayedTestimonials.map((testimonial, index) => (
              <article 
                key={index} 
                className="bg-white shadow-xl rounded-xl p-8 space-y-6 max-w-sm md:max-w-md flex-1"
                role="listitem"
                itemScope
                itemType="https://schema.org/Review"
              >
                <blockquote 
                  className="text-lg text-gray-700 text-left"
                  itemProp="reviewBody"
                >
                  {testimonial.quote}
                </blockquote>
                <footer className="flex items-center space-x-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.alt}
                    className="w-12 h-12 rounded-full"
                    width={48}
                    height={48}
                    loading="lazy"
                  />
                  <div className="flex flex-col items-start text-lg">
                    <span className="text-lg font-semibold" itemProp="author" itemScope itemType="https://schema.org/Person">
                      <span itemProp="name">{testimonial.name}</span>
                    </span>
                    <span className="text-sm text-gray-500" itemProp="jobTitle">{testimonial.role}</span>
                  </div>
                </footer>
              </article>
            ))}
          </div>
          
          <div className="flex justify-center mt-6 gap-2 md:hidden">
            <button
              onClick={prevTestimonial}
              className="text-orange-400 text-xl hover:text-orange-800 transition cursor-pointer h-8 w-8 border-2 border-orange-400 rounded-full flex items-center justify-center"
              aria-label="Depoimento anterior"
            >
              <Image 
                src={"/arrow-left.svg"}
                alt="Seta para esquerda" 
                width={16}
                height={16}
                loading="lazy"
              />
            </button>
            <button
              onClick={nextTestimonial}
              className="text-orange-400 text-xl hover:text-orange-800 transition cursor-pointer border-2 border-orange-400 rounded-full h-8 w-8 flex items-center justify-center"
              aria-label="Próximo depoimento"
            >
              <Image 
                src={"/arrow-right.svg"}
                alt="Seta para direita" 
                width={16}
                height={16}
                loading="lazy"
              />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}