"use client";

import Link from "next/link";
import Image from "next/image";
import Card from "../Card";
import { useEffect, useState, useRef } from "react";
import Head from "next/head";

export default function ProductFeatures() {
    const [mounted, setMounted] = useState(false);
    const featuresRef = useRef(null);

    useEffect(() => {
        setMounted(true);
        
        if (featuresRef.current) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(featuresRef.current);
            
            return () => {
                if (featuresRef.current) {
                    observer.unobserve(featuresRef.current);
                }
            };
        }
    }, []);

    const feature = {
        label: "Popular",
        labelColor: "bg-blue-100 text-blue-600",
        title: "Design for how people think",
        description: "Aliquam ut euismod condimentum elementum ultricies volutpat sit non. ",
        href: "/",
    };

    const metaDescription = "Conheça os recursos exclusivos da nossa plataforma: design centrado no usuário, análises interativas e ferramentas de visualização que tornam seu trabalho mais produtivo.";

    return (
        <>
            <Head>
                <title>Recursos e Funcionalidades | Nossa Plataforma</title>
                <meta name="description" content={metaDescription} />
                <meta name="keywords" content="recursos, funcionalidades, design, UX, interface, ferramentas, análise, dashboard, visualização" />
                <meta property="og:title" content="Recursos e Funcionalidades | Nossa Plataforma" />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/images/features-og-image.jpg" />
                <link rel="canonical" href="https://www.seusite.com/recursos" />
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "SoftwareApplication",
                            "name": "Nossa Plataforma",
                            "applicationCategory": "DesignApplication",
                            "offers": {
                                "@type": "Offer",
                                "price": "0",
                                "priceCurrency": "BRL"
                            },
                            "featureList": [
                                "Design centrado no usuário",
                                "Análises interativas",
                                "Dashboards personalizáveis",
                                "Ferramentas de visualização"
                            ]
                        }
                    `}
                </script>
            </Head>
            <section
                ref={featuresRef}
                className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-10 lg:gap-16 px-4 py-12 md:py-16 lg:py-20 overflow-hidden"
                aria-labelledby="features-heading"
                id="features"
                itemScope
                itemType="https://schema.org/ItemList"
            >
                <div className="flex flex-col w-full lg:w-1/2 px-4 md:px-8 lg:px-14">
                    <header>
                        <h1
                            id="features-heading"
                            className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#0B0B28] mb-4 md:mb-6 lg:mb-8 relative"
                            itemProp="name"
                        >
                            All the cool features 
                            <div
                                className="absolute lg:top-10 lg:left-65 lg:w-60 md:w-36 md:left-48 md:top-8 top-7 left-32 w-24 h-4 inset-0 z-0 bg-[url('/images/lineOrangeBigger.webp')] bg-no-repeat bg-contain pointer-events-none"
                                aria-hidden="true"
                            />                       
                        </h1>
                    </header>
                    <p 
                        className="text-base md:text-lg text-[#0B0B28]/80 mb-6 md:mb-8 max-w-xl"
                        itemProp="description"
                    >
                        Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac. 
                        In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque quisque feugiat cras ullamcorper. 
                        Ultrices in amet, ullamcorper non viverra a, neque orci.
                    </p>
                    <Link
                        href="/recursos"
                        className="text-blue-600 font-medium hover:underline inline-flex items-center group transition-all duration-300"
                        aria-label="Ver todos os recursos disponíveis"
                    >
                        <span>View all the features </span>
                        <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </Link>
                </div>

                <div className="w-full lg:w-1/2 mt-10 md:mt-20 lg:mt-0" itemScope itemType="https://schema.org/ImageObject">
                    <div className="relative">
                        {mounted && (
                            <>
                                <div
                                    className="absolute md:block md:-top-30 lg:-top-40 md:left-30 lg:left-96 z-1 w-full h-full bg-[url('/images/bg-faq.webp')] bg-no-repeat bg-contain pointer-events-none"
                                    aria-hidden="true"
                                />
                                <div
                                    className="absolute md:-left-10 lg:left-50 -top-5 md:-top-10 lg:-top-20 z-0 w-full h-full bg-[url('/images/blob.webp')] bg-no-repeat bg-contain pointer-events-none"
                                    aria-hidden="true"
                                />
                            </>
                        )}

                        <div className="relative z-10 flex flex-col items-center justify-center rounded-xl overflow-hidden mx-auto max-w-md md:max-w-lg lg:max-w-xl">
                            <div className="flex flex-row items-center relative w-full">
                                <div className="w-auto" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                                    <meta itemProp="position" content="1" />
                                    <Card {...feature} />
                                </div>
                                <div className="w-auto flex justify-center">
                                    <Image
                                        src="/images/Picture2.webp"
                                        alt="Dashboard interativo com visualização de dados de design"
                                        width={250}
                                        height={250}
                                        className="w-auto h-auto max-w-[150px] md:max-w-[200px] lg:max-w-[250px]"
                                        loading="eager"
                                        priority
                                        itemProp="contentUrl"
                                    />
                                </div>
                                <div className="absolute top-10 md:top-20 right-0 md:right-auto md:left-2/3">
                                    <Image
                                        src="/images/UserThumb4.webp"
                                        alt="Exemplo de perfil de usuário na plataforma"
                                        width={120}
                                        height={120}
                                        className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-row items-center justify-center mt-4 space-x-2 sm:space-x-4">
                                <Image
                                    src="/images/Picture.webp"
                                    alt="Exemplo de dashboard com análises de desempenho"
                                    width={305}
                                    height={180}
                                    className="w-auto h-auto max-w-[180px] md:max-w-[250px] lg:max-w-[305px]"
                                    loading="lazy"
                                />
                                <Image
                                    src="/images/Picture1.webp"
                                    alt="Exemplo de ferramenta de análise de dados"
                                    width={230}
                                    height={180}
                                    className="w-auto h-auto max-w-[150px] md:max-w-[180px] lg:max-w-[230px]"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}