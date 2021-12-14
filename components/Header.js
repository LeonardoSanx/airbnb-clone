import Image from "next/image";
import {
  HiOutlineSearch,
  HiOutlineGlobeAlt,
  HiOutlineMenu,
  HiUserCircle,
} from "react-icons/hi";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 flex shadow-md p-4
     bg-white w-full md:px-10"
    >
      {/* left */}
      <div className="relative w-1/12 min-w-min md:w-1/3 flex items-center cursor-pointer my-auto">
        <div className="hidden md:flex h-8">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
            alt="airbnb logo"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div>
        <div className="flex md:hidden h-8">
          <Image
            src="https://ebenezersuites.com/wp-content/uploads/2016/06/airbnb-logo.png"
            alt="airbnb logo"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div>
      </div>

      {/* middle */}
      <div className="flex justify-center md:w-1/3">
        <div
          className="flex items-center rounded-full py-1
      border shadow-md pl-5 backdrop-blur-sm bg-white bg-opacity-10 text-sm max-w-[16rem]"
        >
          <input
            type="text"
            placeholder="Comece sua busca"
            className=" placeholder-zinc-700 outline-none flex-grow w-4/5"
          />
          <div className="flex w-1/5 h-8 mx-2 items-center justify-end">
            <HiOutlineSearch
              className="h-7 md:h-8 w-7 md:w-8 min-w-min bg-rose-500 text-white rounded-full p-2 cursor-pointer
         group hover:bg-rose-400"
            />
          </div>
        </div>
      </div>

      {/* right */}
      <div className="flex md:space-x-3 items-center flex-grow md:w-1/3 justify-end text-zinc-700 ">
        <p className="hidden md:inline cursor-pointer text-sm font-semibold">
          Seja um anfitrião
        </p>
        <HiOutlineGlobeAlt className="mr-2 md:mr-0 text-md sm:text-lg md:text-xl cursor-pointer" />
        <div className="flex items-center space-x-2 rounded-full border p-1 pl-2">
          <HiOutlineMenu className="text-sm sm:text-md md:text-lg cursor-pointer" />
          <HiUserCircle className="text-lg sm:text-xl md:text-2xl cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
