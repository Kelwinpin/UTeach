import Link from "next/link";

export default function Features() {
  return (
    <section className="py-24 px-6 flex items-center justify-center">
        <div>                  
            <h2 className="text-3xl md:text-5xl font-semibold text-[#0B0B28] mb-8">All the cool features</h2>
            <p className="text-lg text-[#0B0B28]/80 mb-8 w-lg">
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
    </section>
  );
}