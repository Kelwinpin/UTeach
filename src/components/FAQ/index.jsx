// components/AllInOneSection.tsx
import Image from "next/image";
import Link from "next/link";
import Card from "../Card";

const lessons = [
  {
    label: "Featured",
    labelColor: "bg-purple-100 text-purple-600",
    title: "The map of mathematics",
    description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    href: "#",
  },
  {
    label: "Popular",
    labelColor: "bg-blue-100 text-blue-600",
    title: "Design for how people think",
    description: "Aliquam ut euismod condimentum elementum ultricies volutpat sit non.",
    href: "#",
  },
  {
    label: "New",
    labelColor: "bg-green-100 text-green-600",
    title: "International & commercial law",
    description: "Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui.",
    href: "#",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#0B0B28] leading-tight relative z-2">
              An all-in-one app
              <div className="absolute top-14 left-24 inset-0 z-0 bg-[url('/images/lineOrangeBigger.webp')] bg-no-repeat pointer-events-none" />
              <br />   
              that makes it easier
          </h1>

          <ul className="text-[#0B0B28]/80 text-base space-y-3 mb-8">
            <li className="flex items-start gap-2">
              <Image src="/check.svg" alt="check" width={24} height={24} />
              Est et in pharetra magna adipiscing ornare aliquam.
            </li>
            <li className="flex items-start gap-2">
              <Image src="/check.svg" alt="check" width={24} height={24} />
              Tellus arcu sed consequat ac velit ut eu blandit.
            </li>
            <li className="flex items-start gap-2">
                <Image src="/check.svg" alt="check" width={24} height={24} />
                Ullamcorper ornare in et egestas dolor orci.
            </li>
          </ul>

          <Link
            href="#"
            className="text-blue-600 font-regular hover:underline inline-flex items-center"
          >
            Find more about the app →
          </Link>
        </div>

        <div className="relative">
          <div className="absolute -top-20 inset-0 z-1 bg-[url('/images/bg-faq.webp')] bg-no-repeat  pointer-events-none" />    
          <div className="absolute -top-40 -left-1 inset-0 z-0 bg-[url('/images/blob.webp')] bg-no-repeat pointer-events-none" />
          <div className="relative z-2 md:left-20 md:bottom-40 rounded-xl overflow-hidden">
            <Image
              src="/images/desktop.webp"
              alt="App demo"
              width={700}
              height={400}
              className="w-full object-cover"
            />
          </div>

          <div className="absolute z-2 md:-bottom-0 md:left-0 right-0 flex justify-center gap-4 mt-4 px-2">
            {lessons.map((lesson, index) => (
              <Card key={index} {...lesson} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
