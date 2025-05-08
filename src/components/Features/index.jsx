import Link from "next/link";
import Image from "next/image";
import Card from "../Card";

export default function Features() {
  const lesson =   {
    label: "Popular",
    labelColor: "bg-blue-100 text-blue-600",
    title: "Design for how people think",
    description: "Aliquam ut euismod condimentum elementum ultricies volutpat sit non.",
    href: "#",
  }

  return (
    <section className="flex md:flex-row flex-col items-center justify-center gap-15">
        <div className="flex flex-col px-14">                  
            <h2 className="text-3xl md:text-5xl font-semibold text-[#0B0B28] mb-8">All the cool features</h2>
            <p className="md:text-lg text-[#0B0B28]/80 mb-8 w-lg">
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
        <div className="mt-40">
            <div className="relative">
                <div className="absolute md:-top-50 left-60 inset-0 z-1 bg-[url('/images/bg-faq.webp')] bg-no-repeat  pointer-events-none" />    
                <div className="absolute -left-40 -top-25 h-80 md:h-auto md:-top-40 md:left-10 inset-0 z-0 bg-[url('/images/blob.webp')] bg-no-repeat pointer-events-none" />
                <div className="relative flex flex-col items-center justify-center z-2 md:left-20 bottom-28 rounded-xl overflow-hidden -left-10">
                    <div className="flex relative w-full">
                        <Card {...lesson} /> 
                        <Image
                            src="/images/Picture2.webp"
                            alt="App demo"
                            width={250}
                            height={250}
                        />
                        <div className="absolute top-20 left-96">
                            <Image 
                                src="/images/UserThumb4.webp"
                                alt="User demo"
                                width={120}
                                height={120}
                            />
                        </div>
                    </div>
               
                    <div className="flex">
                        <Image 
                            src="/images/Picture.webp"
                            alt="App demo"
                            width={305}
                            height={180}
                        />
                        <Image 
                            src="/images/Picture1.webp"
                            alt="App demo"
                            width={230}
                            height={180}
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}