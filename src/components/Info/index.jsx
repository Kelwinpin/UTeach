import Image from "next/image";

export default function Info() {
  const infos = [
    {
      title: "user contries",
      number: "195",
      iconPath: "/diamond.svg",
    },
    {
      title: "valued teachers",
      number: "1M",
      iconPath: "/heart-circle-sharp.svg",
    },
    {
      title: "happy students",
      number: "17M",
      iconPath: "/school.svg",
    },
  ];
  return (
    <section className="bg-[#0B0B28] flex md:flex-row flex-col items-center justify-center h-full w-full">
      {
        infos.map((info, index) => (
          <div key={index} className="flex flex-col items-center justify-center w-full md:w-1/2 lg:w-1/3 px-6 py-10">
            <Image
              src={info.iconPath}
              alt={`${info.title} icon`}
              width={64}
              height={64}
            />
            <p className="text-[#FACC15] md:text-7xl text-6xl font-bold">{info.number}</p>
            <p className="text-[#FACC15] text-xl font-medium">{info.title}</p>
          </div>
        ))
      }
    </section>
  ); 
}