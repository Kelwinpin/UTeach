import Image from "next/image";
import Link from "next/link";

export default function Explore() {
  return (
    <section className="w-full px-6 py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#0B0B28] mb-6 relative">
                <Image 
                    src={"/plane.svg"}
                    alt={`Plane`} 
                    width={24}
                    height={24}
                    className="absolute bottom-28 left-65 "
                />
                Meet international students <br />& teachers
            </h2>
            <p className="text-lg text-[#0B0B28]/80 mb-8">
                Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc.
                Eget commodo eget in aliquam facilisis facilisi nec magna hendrerit.
            </p>

            <Link
                href="#"
                className="text-blue-600 font-medium hover:underline"
                >
                Explore teachers and students →
            </Link>
        </div>

        <Image
            src={"/images/images.webp"}
            alt={`Student and Teacher`}
            className="object-cover md:w-96 w-full md:h-96 h-full"
            width={300}
            height={300}
        />
    </section>
  );
}