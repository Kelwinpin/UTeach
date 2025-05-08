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
                    <div className="absolute hidden md:block md:-top-20 lg:-top-40 md:left-20 lg:left-40 z-0 w-full h-full bg-[url('/images/bg-faq.webp')] bg-no-repeat bg-contain pointer-events-none" />
                    <div className="absolute md:-left-10 lg:left-50 -top-5 md:-top-30 lg:-top-20 z-0 w-full h-full bg-[url('/images/blob.webp')] bg-no-repeat bg-contain pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center justify-center rounded-xl overflow-hidden mx-auto max-w-md md:max-w-lg lg:max-w-xl">
                        <div className="flex flex-row items-center relative w-full">
                            <div className="w-auto">
                                <Card {...lesson} />
                            </div>
                            <div className="w-auto flex justify-center">
                                <Image
                                    src="/images/Picture2.webp"
                                    alt="App demo"
                                    width={250}
                                    height={250}
                                    className="w-auto h-auto max-w-[150px] md:max-w-[200px] lg:max-w-[250px]"
                                />
                            </div>
                            <div className="absolute top-10 md:top-20 right-0 md:right-auto md:left-4/6">
                                <Image
                                    src="/images/UserThumb4.webp"
                                    alt="User demo"
                                    width={120}
                                    height={120}
                                    className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
                                />
                            </div>
                        </div>

                        <div className="flex flex-row items-center justify-center mt-4 space-x-2">
                            <Image
                                src="/images/Picture.webp"
                                alt="App demo"
                                width={305}
                                height={180}
                                className="w-auto h-auto max-w-[180px] md:max-w-[250px] lg:max-w-[305px]"
                            />
                            <Image
                                src="/images/Picture1.webp"
                                alt="App demo"
                                width={230}
                                height={180}
                                className="w-auto h-auto max-w-[150px] md:max-w-[180px] lg:max-w-[230px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
