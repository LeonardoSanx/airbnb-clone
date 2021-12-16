import Image from "next/image";
import {
  HiOutlineSearch,
  HiOutlineGlobeAlt,
  HiOutlineMenu,
  HiUserCircle,
} from "react-icons/hi";
import { FiUsers } from "react-icons/fi";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);

  const resetInput = () => {
    setSearchInput("");
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const scroll = {};

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="w-full flex justify-end bg-white shadow-md p-4 md:px-10">
        {/* left */}
        <div className="relative w-1/12 min-w-min md:w-1/3 flex items-centermy-auto">
          <div className="relative hidden md:flex w-32 ">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
              alt="airbnb logo"
              layout="fill"
              objectFit="contain"
              objectPosition="left"
              className="cursor-pointer"
            />
          </div>
          <div className="relative flex md:hidden w-10">
            <Image
              src="https://ebenezersuites.com/wp-content/uploads/2016/06/airbnb-logo.png"
              alt="airbnb logo"
              layout="fill"
              objectFit="contain"
              objectPosition="left"
              className="cursor-pointer"
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
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              type="text"
              placeholder="Comece sua busca"
              className=" placeholder-zinc-700 outline-none flex-grow w-4/5"
            />
            <div className="flex w-1/5 h-8 mx-2 items-center justify-end">
              <motion.div
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.9 }}
                className="flex rounded-full p-2 bg-rose-500 items-center cursor-pointer hover:bg-rose-600"
              >
                <HiOutlineSearch className="text-sm md:text-base text-white" />
              </motion.div>
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
      </div>
      <AnimatePresence exitBeforeEnter>
        {searchInput ? (
          <motion.div
            key={1}
            initial={{ scale: 0, y: -220 }}
            animate={{ scale: 1, y: 5 }}
            exit={{ scale: 0, y: -150 }}
            className="w-full bg-white p-4 rounded-xl max-w-min mx-auto flex flex-col items-center"
          >
            <DateRange
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#ff4466"]}
              onChange={handleSelect}
              showSelectionPreview={false}
              scroll={{ enabled: true }}
              className="scrollbar-hide"
            />
            <div className="flex w-full px-5 items-center border-b border-rose-200 pt-2 mb-2">
              <h2 className="flex flex-grow font-semibold">Hóspedes</h2>
              <FiUsers className="text-lg " />
              <input
                value={noOfGuests}
                onChange={(e) => setNoOfGuests(e.target.value)}
                type="number"
                min={1}
                max={99}
                className="w-14 pl-3 text-lg outline-none text-rose-500"
              />
            </div>
            <div className="flex w-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={resetInput}
                className="flex-grow text-xs md:text-sm font-semibold text-rose-500 hover:text-rose-900 rounded-md mx-2 py-1"
              >
                Cancelar
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-grow text-xs md:text-sm font-semibold bg-rose-500 text-white hover:bg-rose-600 rounded-md mx-2 py-1 "
              >
                Pesquisar
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <div></div>
        )}
      </AnimatePresence>
    </header>
  );
}
