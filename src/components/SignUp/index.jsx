"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function SignUpSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        // Adiciona observador de interseção para analytics ou animações futuras
        if (sectionRef.current) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Poderia disparar eventos de analytics aqui
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(sectionRef.current);
            
            return () => {
                if (sectionRef.current) {
                    observer.unobserve(sectionRef.current);
                }
            };
        }
    }, []);

    // Metadados da página para SEO
    const pageTitle = "Inscreva-se e Comece a Aprender | Nossa Plataforma Educacional";
    const pageDescription = "Entre para nossa comunidade de aprendizado online. Acesse cursos, materiais exclusivos e conecte-se com milhares de estudantes.";

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta name="keywords" content="inscrição, aprendizado online, cursos, educação, cadastro, comunidade de aprendizado" />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/images/signup-og-image.jpg" />
                <link rel="canonical" href="https://www.seusite.com/inscreva-se" />
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            "name": "${pageTitle}",
                            "description": "${pageDescription}",
                            "offers": {
                                "@type": "Offer",
                                "price": "0",
                                "priceCurrency": "BRL"
                            },
                            "mainEntity": {
                                "@type": "LearningResource",
                                "name": "Plataforma de Aprendizado Online",
                                "description": "Acesse cursos e materiais exclusivos para sua jornada de aprendizado"
                            }
                        }
                    `}
                </script>
            </Head>
            
            <section 
                ref={sectionRef}
                className="relative bg-yellow-400 w-full overflow-hidden py-16 md:py-24 lg:py-32" 
                aria-labelledby="join-learning-heading"
                id="signup-section"
                itemScope
                itemType="https://schema.org/LearningResource"
            >
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[500px] md:min-h-[600px]">
                    <div className="absolute lg:-left-78 md:-left-56 top-0 w-1/2 h-full md:block hidden">
                        <Image 
                            src="/images/cardsRoundLeft.webp"
                            alt="Comunidade de alunos engajados na plataforma"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-contain object-left-top"
                            priority
                            loading="eager"
                            itemProp="image"
                        />
                    </div>
                    
                    <div className="absolute left-0 -top-30 w-full md:hidden block">
                        <Image 
                            src="/images/cardsRoundLeft.webp"
                            alt="Comunidade de alunos engajados na plataforma"
                            width={200}
                            height={300}
                            className="object-contain mx-auto"
                            priority
                            loading="eager"
                        />
                    </div>

                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 w-full max-w-lg md:max-w-xl text-center md:mt-0 mt-24">
                        <h1
                            id="join-learning-heading"
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 md:mb-6"
                            itemProp="name"
                        >
                            Join a world of learning
                        </h1>
                        <div itemProp="description">
                            <p className="text-base md:text-lg text-black/80 mb-4 md:mb-6 max-w-md mx-auto">
                                Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
                            </p>
                            <p className="text-base md:text-lg text-black/80 mb-8 md:mb-10 max-w-md mx-auto">
                                Risus elit et fringilla habitant ut facilisi.
                            </p>
                        </div>
                        <Link
                            href="/signup"
                            className="inline-flex items-center justify-center px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors duration-300 text-lg"
                            aria-label="Clique para se inscrever na plataforma de aprendizado"
                            itemProp="url"
                        >
                            Sign Up Now
                        </Link>
                    </div>
                    
                    <div className="absolute lg:-right-78 md:-right-56 bottom-0 w-1/2 h-full md:block hidden">
                        <Image 
                            src="/images/cardsRoundRight.webp"
                            alt="Estudantes interagindo com a plataforma de aprendizado"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-contain object-right-bottom"
                            loading="lazy"
                        />
                    </div>

                    <div className="absolute right-0 -bottom-40 w-full md:hidden block mt-16">
                        <Image 
                            src="/images/cardsRoundRight.webp"
                            alt="Estudantes interagindo com a plataforma de aprendizado"
                            width={200}
                            height={300}
                            className="object-contain mx-auto"
                            loading="lazy"
                        />
                    </div>
                    
                </div>
                
                <div className="hidden" aria-hidden="true" itemProp="teaches">
                    <span itemProp="educationalLevel">Todos os níveis</span>
                    <meta itemProp="keywords" content="aprendizado online, cursos, educação a distância" />
                </div>
            </section>
        </>
    );
}