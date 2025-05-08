import Link from "next/link";
import Image from "next/image";
import Card from "../Card";

export default function Features() {
    const lesson = {
        label: "Popular",
        labelColor: "bg-blue-100 text-blue-600",
        title: "Design for how people think",
        description: "Aliquam ut euismod condimentum elementum ultricies volutpat sit non.",
        href: "#",
    }

    return (
        <section className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-10 lg:gap-16 px-4 py-12 md:py-16 lg:py-20 overflow-hidden">
            <div className="flex flex-col w-full lg:w-1/2 px-4 md:px-8 lg:px-14">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0B0B28] mb-4 md:mb-6 lg:mb-8">All the cool features</h2>
                <p className="text-base md:text-lg text-[#0B0B28]/80 mb-6 md:mb-8 max-w-xl">
                    Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac. In et dolor eu donec maecenas nulla.
                    Cum sed orci, sit pellentesque quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non viverra a, neque orci.
                </p>
                <Link
                    href="#"
                    className="text-blue-600 font-regular hover:underline inline-flex items-center"
                >
                    View all features →
                </Link>
            </div>
            <div className="w-full lg:w-1/2 mt-10 md:mt-20 lg:mt-0">
                <div className="relative">
                    {/* Background elements */}
                    <div className="absolute hidden md:block md:-top-20 lg:-top-40 md:left-20 lg:left-40 z-0 w-full h-full bg-[url('/images/bg-faq.webp')] bg-no-repeat bg-contain pointer-events-none" />
                    <div className="absolute -left-20 md:-left-10 lg:left-0 -top-20 md:-top-30 lg:-top-40 z-0 w-full h-full bg-[url('/images/blob.webp')] bg-no-repeat bg-contain pointer-events-none" />

                    {/* Content container */}
                    <div className="relative z-10 flex flex-col items-center justify-center rounded-xl overflow-hidden mx-auto max-w-md md:max-w-lg lg:max-w-xl">
                        {/* Top row with card and image */}
                        <div className="flex flex-col md:flex-row items-center relative w-full">
                            <div className="w-full md:w-auto">
                                <Card {...lesson} />
                            </div>
                            <div className="w-full md:w-auto flex justify-center md:justify-start">
                                <Image
                                    src="/images/Picture2.webp"
                                    alt="App demo"
                                    width={250}
                                    height={250}
                                    className="w-auto h-auto max-w-[200px] md:max-w-[250px]"
                                />
                            </div>
                            {/* User thumbnail */}
                            <div className="absolute top-10 md:top-20 right-0 md:right-auto md:left-3/4">
                                <Image
                                    src="/images/UserThumb4.webp"
                                    alt="User demo"
                                    width={120}
                                    height={120}
                                    className="w-20 h-20 md:w-24 md:h-24 lg:w-30 lg:h-30"
                                />
                            </div>
                        </div>

                        {/* Bottom row with two images */}
                        <div className="flex flex-col md:flex-row items-center justify-center mt-4">
                            <Image
                                src="/images/Picture.webp"
                                alt="App demo"
                                width={305}
                                height={180}
                                className="w-full max-w-[250px] md:max-w-[305px] h-auto mb-4 md:mb-0 md:mr-2"
                            />
                            <Image
                                src="/images/Picture1.webp"
                                alt="App demo"
                                width={230}
                                height={180}
                                className="w-full max-w-[200px] md:max-w-[230px] h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
