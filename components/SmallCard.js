import Image from "next/image";

export default function SmallCard({ img, distance, location }) {
  return (
    <div
      className="flex items-center mr-4 mt-7 space-x-4 rounded-lg cursor-pointer bg-slate-100
    hover:bg-slate-200 hover:scale-105 transition transform duration-200 ease-out"
    >
      <div className="relative h-12 sm:h-14 md:h-16 w-12 sm:w-14 md:w-16">
        <Image src={img} layout="fill" className="rounded-l-lg" />
      </div>

      <div className="text-sm sm:text-base">
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}
