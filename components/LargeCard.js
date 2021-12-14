import Image from "next/image";

export default function LargeCard({ img, title, buttonText }) {
  return (
    <section className="relative -mx-8 sm:-mx-16 md:mx-0 py-16">
      <div className="relative h-96  min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="md:rounded-2xl"
        />
      </div>
      <div className="absolute top-32 left-8 sm:left-12 bottom-32 flex flex-col justify-between">
        <h3 className="text-4xl mb-3 max-w-[200px]">{title}</h3>

        <button className="text-sm text-white content-end bg-gray-900 px-4 py-2 rounded-lg mt-5">
          {buttonText}
        </button>
      </div>
    </section>
  );
}
