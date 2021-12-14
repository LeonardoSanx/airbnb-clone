import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] xl:h-[600px] 2xl:h-[700px] w-full">
      <div className="flex md:hidden">
        <Image
          src="https://a0.muscache.com/im/pictures/ce7d8ae6-977b-4031-b800-762ac4daf347.jpg?im_w=960"
          alt="cabin photo"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="hidden md:flex lg:hidden">
        <Image
          src="https://a0.muscache.com/im/pictures/f1502649-e034-40ab-9fed-7992b7d550c6.jpg?im_w=1200"
          alt="cabin photo"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="hidden lg:flex">
        <Image
          src="https://a0.muscache.com/im/pictures/f1502649-e034-40ab-9fed-7992b7d550c6.jpg?im_q=highq&im_w=1920"
          alt="cabin photo"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute top-1/2 mt-4 w-full text-center">
        <p className="text-xl sm:text-2xl text-white">
          Está na dúvida de onde ir?
        </p>
        <button
          type="text"
          className="text-purple-500 bg-white px-6 py-3 
        rounded-full font-bold my-3 hover:scale-105
        active:scale-90 transition duration-200"
        >
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-pink-600">
            Busca flexível
          </p>
        </button>
      </div>
    </div>
  );
}
