"use client";

import { useState } from 'react';
import Head from 'next/head';

export default function SendEmail() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setSubmitted(true);
            setEmail('');
            setMessage('');
        } catch (err) {
            setError('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Head>
                <title>Solicite uma demonstração | Nossa Empresa</title>
                <meta name="description" content="Entre em contato conosco para solicitar uma demonstração e conhecer como podemos ajudar no seu próximo projeto." />
                <meta name="keywords" content="demonstração, contato, projeto, orçamento" />

                <meta property="og:title" content="Solicite uma demonstração | Nossa Empresa" />
                <meta property="og:description" content="Entre em contato conosco para solicitar uma demonstração e conhecer como podemos ajudar no seu próximo projeto." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.suaempresa.com/contato" />
                <meta property="og:image" content="https://www.suaempresa.com/images/og-image.jpg" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Solicite uma demonstração | Nossa Empresa" />
                <meta name="twitter:description" content="Entre em contato conosco para solicitar uma demonstração e conhecer como podemos ajudar no seu próximo projeto." />
                <meta name="twitter:image" content="https://www.suaempresa.com/images/twitter-image.jpg" />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Nossa Empresa",
                            "url": "https://www.suaempresa.com",
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+55-11-1234-5678",
                                "contactType": "customer service"
                            }
                        })
                    }}
                />
            </Head>

            <section id="contact" className="bg-orange-600 py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-10">
                        <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
                            Ready for your next project?
                        </h2>
                        <p className="text-white text-xl opacity-90">
                            Sit elit feugiat turpis sed integer integer accumsan turpis.
                        </p>
                    </div>

                    {submitted ? (
                        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                            <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Mensagem Enviada!</h3>
                            <p className="text-gray-600 mb-6">Agradecemos seu contato. Nossa equipe entrará em contato em breve.</p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded-md transition duration-300"
                            >
                                Enviar nova mensagem
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-lg shadow-lg" aria-label="Formulário de contato">
                            <div className="mb-6">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    required
                                    aria-required="true"
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="What are you say?"
                                    rows="4"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    required
                                    aria-required="true"
                                ></textarea>
                            </div>

                            {error && (
                                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700" role="alert">
                                    {error}
                                </div>
                            )}

                            <div className="text-center">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="bg-gray-900 hover:bg-black text-white font-medium py-3 px-8 rounded-md transition duration-300 w-full md:w-auto"
                                    aria-busy={loading}
                                >
                                    {loading ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Loading...
                                        </span>
                                    ) : (
                                        'Request Demo'
                                    )}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </section>
        </>
    );
}