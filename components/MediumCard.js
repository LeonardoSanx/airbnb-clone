import Image from "next/image";

export default function MediumCard({ img, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 transfomr transition duration-300 ease-out">
      <div className="relative h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>
      <h3 className="text-lg sm:text-xl md:text-2xl  mt-3">{title}</h3>
    </div>
  );
}
